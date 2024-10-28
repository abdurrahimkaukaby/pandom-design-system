import { Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from '../../confirmation-modal/confirmation-modal.service';
import { catchError, EMPTY, Subject, take, takeUntil, tap } from 'rxjs';
import { ToasterService } from '../../toaster/toaster.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { BrandDTO, ParentBrandDTO, UpsertBrandDTO, UpsertParentBrandDTO } from '../../../../../api/master-data/models/brand.dto';
import IManageBrands, { ManageBrandsApi } from '../../../../../api/master-data/ports/i-manage-brands';
import { FormGroupOf } from '../../../../../core/dto/form-group-of.dto';
import { SlideAnimation, AccordionAnimation, FadeInOutAnimation } from '../../../../../core/const/animation.const';

@Component({
  selector: 'app-add-brand-type',
  templateUrl: './add-brand-type.component.html',
  styleUrl: './add-brand-type.component.css',
  animations: [
    SlideAnimation,
    AccordionAnimation,
    FadeInOutAnimation
  ],
})
export class AddBrandTypeComponent implements OnInit, OnDestroy {
  @Input() selectedBrand : ParentBrandDTO
  @Input() selectedType : BrandDTO
  @Input() brandData : ParentBrandDTO[]
  @Output() onCancelEmit = new EventEmitter<void>();
  @Output() onRefreshEmit = new EventEmitter<void>();

  private readonly unsubscribe$: Subject<void> = new Subject();

  machineBrandForm = new FormControl('',Validators.required)
  brandOption : {title: string, value: string}[] = [];
  duplicatedCheckArray : string[] = [];
  duplicatedCheckArrayApi : string[] = [];

  isLoading: boolean = false
  
  isExistingBrand = new FormControl(false)
  equipmentTypeArrayForm = new FormArray<FormGroup<FormGroupOf<BrandDTO>>>([])

  constructor(
    private confirmationService: ConfirmationService,
    private toasterService: ToasterService,
    @Inject(ManageBrandsApi) private _brandsManager: IManageBrands,
  ) {

    this.equipmentTypeArrayForm.valueChanges
      .pipe(
        takeUntil(this.unsubscribe$),
        tap(types => {
          this.duplicatedCheckArray = types.map(v => v.model)
          console.log('this.duplicatedCheckArray => ', this.duplicatedCheckArray);
          
        })
      ).subscribe()

    this.isExistingBrand.valueChanges
      .pipe(
        takeUntil(this.unsubscribe$),
        tap(v => {
          this.machineBrandForm.patchValue(null)
          
        })
      ).subscribe()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      (changes['selectedBrand'] &&
      changes['selectedBrand']?.previousValue !== changes['selectedBrand']?.currentValue!)
    ) {
      if (this.selectedBrand){
        this.machineBrandForm.setValue(this.selectedBrand.name)
        this.equipmentTypeArrayForm.clear()
        this.selectedBrand.children.forEach(type => {
          this.equipmentTypeArrayForm.push(new FormGroup({
            id: new FormControl(type.id),
            code: new FormControl(type.code),
            name: new FormControl(type.name),
            model: new FormControl(type.model, Validators.required),
            createdAt: new FormControl(type.createdAt),
            updatedAt: new FormControl(type.updatedAt),
          }))
        })
      }
    }

    if (
      (changes['brandData'] &&
      changes['brandData']?.previousValue !== changes['brandData']?.currentValue!)
    ) {
      if (this.brandData){
        
        this.brandData.forEach(brand => {
          this.brandOption.push({
            title: brand.name,
            value: brand.name
          })
        })
        console.log('brand data =>', this.brandOption );
      }
    }
  }
  
  ngOnInit(): void {
    if (!this.selectedBrand){
      this.equipmentTypeArrayForm.push(new FormGroup({
        id: new FormControl(null),
        code: new FormControl(''),
        name: new FormControl(''),
        model: new FormControl('', Validators.required),
        createdAt: new FormControl(''),
        updatedAt: new FormControl(''),
      }))
    }
  }

  doNothing(event: MouseEvent){
    event.stopPropagation();
  }

  onAddType(){
    this.equipmentTypeArrayForm.push(new FormGroup({
      id: new FormControl(null),
      code: new FormControl(''),
      name: new FormControl(''),
      model: new FormControl('', Validators.required),
      createdAt: new FormControl(''),
      updatedAt: new FormControl(''),
    }))
  }

  onDeleteType(index: number){
    this.equipmentTypeArrayForm.removeAt(index)
  }

  duplicateArrayIndex(){
    const seen = new Map<string, number>();
    const duplicateIndices: number[] = [];

    const checkDuplicateArray = this.duplicatedCheckArray.concat(this.duplicatedCheckArrayApi)
    checkDuplicateArray.forEach((control, index) => {
      const value = control
      if (seen.has(value)) {
        // Add both the previous occurrence and the current one to duplicates if not already added
        const firstIndex = seen.get(value);
        if (firstIndex !== undefined && !duplicateIndices.includes(firstIndex)) {
          duplicateIndices.push(firstIndex);
        }
        duplicateIndices.push(index);
      } else {
        seen.set(value, index);
      }
    });

    duplicateIndices.forEach(v => {
      this.equipmentTypeArrayForm.at(v)
    })

    return duplicateIndices;
  };

  onCancel(){
    if (!this.selectedBrand){
      if (this.machineBrandForm.dirty){
        this.onConfirmationModal()
      } else {
        this.confirmationService.onCloseModal()
        this.onCancelEmit.emit()
      };
    } else {
      // console.log('term1 ', this.machineBrandForm.value === this.selectedBrand.name);
      // console.log('term2 ', this.equipmentTypeArrayForm.getRawValue().every(type => this.selectedBrand.children.map(v => v.model).includes(type.model) && this.equipmentTypeArrayForm.length === this.selectedBrand.children.length));
      
      if (
        this.machineBrandForm.value === this.selectedBrand.name &&
        this.equipmentTypeArrayForm.getRawValue().every(type => this.selectedBrand.children.map(v => v.model).includes(type.model) && this.equipmentTypeArrayForm.length === this.selectedBrand.children.length)
      ){
        this.confirmationService.onCloseModal()
        this.onCancelEmit.emit()
      } else {
        this.onConfirmationModal()
      };
    }
  }

  onConfirmationModal(){
    this.confirmationService.openConfirmationDialog({
      title: 'Cancel add brand & type',
      message: 'Are you sure? your progress will not be saved.',
      confirmButtonText: 'Yes, Cancel',
      cancelButtonText: 'Stay here',
      confirmButtonColor: 'red',
      backgroundColor: 'transparent',
      positionX: 'right'
    });
    // this.confirmationService.onStartLoading();

    this.confirmationService.confirmAction$
    .pipe(
      take(1)
    )
    .subscribe(confirmed => {
      if (confirmed) {
        // Proceed with the delete action
        console.log('Cancel confirmaed');
        this.confirmationService.onCloseModal()
        this.onCancelEmit.emit()
      } else {
        console.log('Cancel cancelled');
      }
    });
  }

  onSubmit(){
    this.isLoading = true

    const upsertParetBrandData : UpsertParentBrandDTO = {
      id: this.selectedBrand?.id || null,
      name: this.machineBrandForm.value,
      children: this.equipmentTypeArrayForm?.getRawValue()
    }
    if(this.selectedBrand){
      this._brandsManager.updateBrand(this.selectedBrand.id, upsertParetBrandData)
        .pipe(
          catchError((err) => {

            console.log('error => ', err.error)

            if (err.status === 400){
              this.toasterService.error( 'Failed to create brand & type.' , 3000);
              console.log('error details => ', err?.error?.errorsDetails?.length > 0)
              if (err?.error?.errorsDetails && err?.error?.errorsDetails?.length > 0){
                console.log('error details => ', err?.error?.errorsDetails)

                err?.error?.errorsDetails?.forEach(v => {
                  this.toasterService.error( v?.message || 'Failed to create brand & type.' , 3000);

                  if(!this.duplicatedCheckArrayApi.includes(v?.rejectedValue)){
                    this.duplicatedCheckArrayApi.push(v?.rejectedValue)
                  }
                })
              }
            } else if (err.status === 409){
              if (err?.error?.errorsDetails && err?.error?.errorsDetails?.length > 0){
                err?.error?.errorsDetails?.forEach(v => {
                  this.toasterService.error( v?.message || 'Failed to create brand & type.' , 3000);

                  if(!this.duplicatedCheckArrayApi.includes(v?.rejectedValue)){
                    this.duplicatedCheckArrayApi.push(v?.rejectedValue)
                  }
                })
              }
            } else {
              this.toasterService.error('Failed to update brand & type.', 3000);
            }

            this.isLoading = false
  
            return EMPTY
          }),
          tap(v => {
            this.toasterService.success('Successfully changed data of brand & type.', 3000);
            this.onRefreshEmit.emit();
          })
        ).subscribe()
    } else {
      this._brandsManager.createBrand(upsertParetBrandData)
        .pipe(
          catchError((err) => {

            console.log('error => ', err)

            if (err.status === 400){
              this.toasterService.error( 'Failed to create brand & type.' , 3000);
              if (err?.error?.errorsDetails && err?.error?.errorsDetails?.length > 0){
                console.log('error details => ', err?.error?.errorsDetails)

                err?.error?.errorsDetails?.forEach(v => {
                  this.toasterService.error( v?.message || 'Failed to create brand & type.' , 3000);

                  if(!this.duplicatedCheckArrayApi.includes(v?.rejectedValue)){
                    this.duplicatedCheckArrayApi.push(v?.rejectedValue)
                  }
                })
              }
            } else if (err.status === 409){
              if (err?.errorsDetails && err?.errorsDetails?.length > 0){
                err?.errorsDetails?.forEach(v => {
                  this.toasterService.error( v?.message || 'Failed to create brand & type.' , 3000);

                  if(!this.duplicatedCheckArrayApi.includes(v?.rejectedValue)){
                    this.duplicatedCheckArrayApi.push(v?.rejectedValue)
                  }
                })
              }
            } else {
              this.toasterService.error('Failed to create brand & type.', 3000);
            }
            this.isLoading = false

            return EMPTY
          }),
          tap(v => {
            this.toasterService.success('Successfully create data of brand & type.', 3000);
            this.onRefreshEmit.emit();
          })
        ).subscribe()
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
