import { Component, EventEmitter, Inject, Input, OnChanges, OnDestroy, Output, signal, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from '../../confirmation-modal/confirmation-modal.service';
import { catchError, EMPTY, Subject, take, takeUntil, tap } from 'rxjs';
import { ToasterService } from '../../toaster/toaster.service';
import { SubCategoryDTO, UpsertSubCategoryDTO } from '../../../../../api/master-data/models/sub-category.dto';
import { FormGroupOf } from '../../../../../core/dto/form-group-of.dto';
import IManageSubCategory, { ManageSubCategoryApi } from '../../../../../api/master-data/ports/i-manage-sub-category';

@Component({
  selector: 'app-add-machine-sub-category',
  templateUrl: './add-machine-sub-category.component.html',
  styleUrl: './add-machine-sub-category.component.css'
})
export class AddMachineSubCategoryComponent implements OnChanges, OnDestroy {
  @Input() selectedSubCategory: SubCategoryDTO
  @Input() parentData: {id: number, name: string}[]=[]

  @Output() onCancelEmit = new EventEmitter<void>();
  @Output() onRefreshEmit = new EventEmitter<void>();
  
  private readonly unsubscribe$: Subject<void> = new Subject();

  isLoading: boolean = false
  isErrorDuplicate = signal(false)

  subCategoryForm = new FormGroup<FormGroupOf<UpsertSubCategoryDTO>>({
    id : new FormControl<number>(null),
    parentId : new FormControl<number>(null),
    parentName:  new FormControl<string>('', Validators.required),
    parentDescription:  new FormControl<string>(''),
    categoryName:  new FormControl<string>('', Validators.required),
    categoryDescription:  new FormControl<string>(''),
  })
  
  constructor(
    private confirmationService: ConfirmationService,
    private toasterService: ToasterService,
    @Inject(ManageSubCategoryApi) private _subCategoryManager: IManageSubCategory,
  ) {

    this.subCategoryForm.valueChanges
    .pipe(
      takeUntil(this.unsubscribe$),
      tap(v => {
        this.isErrorDuplicate.set(false)
      })
    ).subscribe()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['selectedSubCategory'] &&
      changes['selectedSubCategory']?.previousValue !== changes['selectedSubCategory']?.currentValue!
    ) {
      if (this.selectedSubCategory){
        this.subCategoryForm.setValue({
          id: this.selectedSubCategory.id,
          parentId: this.selectedSubCategory.parentId,
          parentName: this.selectedSubCategory.parentName,
          parentDescription: this.selectedSubCategory.parentDescription,
          categoryName: this.selectedSubCategory.categoryName,
          categoryDescription: this.selectedSubCategory.categoryDescription,
        })
      }
    }

    if (
      changes['parentData'] &&
      changes['parentData']?.previousValue !== changes['parentData']?.currentValue!
    ) {}
  }

  doNothing(event: MouseEvent){
    event.stopPropagation();
  }

  onCancel(){
    if (!this.selectedSubCategory){
      if (this.subCategoryForm.dirty){
        this.onConfirmationModal()
      } else {
        this.confirmationService.onCloseModal()
        this.onCancelEmit.emit()
      };
    } else {
      if (
        this.subCategoryForm.controls.parentName.value === this.selectedSubCategory.parentName &&
        this.subCategoryForm.controls.categoryName.value === this.selectedSubCategory.categoryName
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
      title: 'Cancel add sub-category',
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
    // console.log('submit');

    if(this.selectedSubCategory){
      this.subCategoryForm.controls.parentId.patchValue(this.parentData.find(v => v.name === this.subCategoryForm.controls.parentName.value).id)
      this._subCategoryManager.updateSubCategory(this.selectedSubCategory.id, this.subCategoryForm.getRawValue())
        .pipe(
          catchError((err) => {
            this.toasterService.error('Failed to update Sub Category.', 3000);
            this.isLoading = false
  
            return EMPTY
          }),
          tap(v => {
            this.toasterService.success('Successfully changed data of sub category.', 3000);
            this.onRefreshEmit.emit();
          })
        ).subscribe()
    } else {
      this.subCategoryForm.controls.parentId.patchValue(this.parentData.find(v => v.name === this.subCategoryForm.controls.parentName.value).id)
      this._subCategoryManager.createSubCategory(this.subCategoryForm.getRawValue())
        .pipe(
          catchError((err) => {
            console.log('error => ', err)

            if (err.status === 400){
              this.toasterService.error( err?.errorsDetails?.at(0)?.message || 'Failed to create Sub Category.' , 3000);
            } else if (err.status === 409){
              this.isErrorDuplicate.set(true);
              this.toasterService.error( err?.errorsDetails?.at(0)?.message || 'Failed to create Sub Category.' , 3000);
            } else {
              this.toasterService.error('Failed to create Sub Category.' , 3000);
            }
            this.isLoading = false
            return EMPTY
          }),
          tap(v => {
            this.toasterService.success('Successfully create data of sub category.', 3000);
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
