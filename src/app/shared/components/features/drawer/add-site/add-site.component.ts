import { Component, EventEmitter, Inject, Input, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from '../../confirmation-modal/confirmation-modal.service';
import { catchError, EMPTY, Subject, take, takeUntil, tap } from 'rxjs';
import { ToasterService } from '../../toaster/toaster.service';
import { SiteDTO, UpsertSiteDTO } from '../../../../../api/master-data/models/site.dto';
import IManageSites, { ManageSitesApi } from '../../../../../api/master-data/ports/i-manage-sites';
import { FormGroupOf } from '../../../../../core/dto/form-group-of.dto';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrl: './add-site.component.css'
})
export class AddSiteComponent implements OnDestroy {
  @Input() selectedSite: SiteDTO
  @Output() onCancelEmit = new EventEmitter<void>();
  @Output() onRefreshEmit = new EventEmitter<void>();

  private readonly unsubscribe$: Subject<void> = new Subject();

  isLoading: boolean = false
  isCordinateShowed : boolean = false
  siteFormGroup = new FormGroup<FormGroupOf<UpsertSiteDTO>>({
    id : new FormControl<number>(null),
    code : new FormControl<string>(''),
    name : new FormControl<string>('', Validators.required),
    latitude : new FormControl<number>(null, [Validators.required, Validators.max(90.00000000000000000000000000000001)]),
    longitude : new FormControl<number>(null, [Validators.required, Validators.max(180.00000000000000000000000000000001)]),
    location : new FormControl<string>(''),
    pole : new FormControl<string>('NORTH', Validators.required),
  })

  constructor(
    private confirmationService: ConfirmationService,
    private toasterService: ToasterService,
    @Inject(ManageSitesApi) private _sitesManager: IManageSites,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['selectedSite'] &&
      changes['selectedSite']?.previousValue !== changes['selectedSite']?.currentValue!
    ) {
      if (this.selectedSite){
        this.siteFormGroup.setValue({
          id: this.selectedSite.id,
          name: this.selectedSite.name,
          code: this.selectedSite.code,
          latitude: this.selectedSite.latitude,
          longitude: this.selectedSite.longitude,
          location: this.selectedSite.location,
          pole: this.selectedSite.pole
        })
      }
    }
  }

  doNothing(event: MouseEvent){
    event.stopPropagation();
  }

  onToggleCordinate($event){
    this.isCordinateShowed = !this.isCordinateShowed
  }

  onCancel(){
    if (!this.selectedSite){
      if (this.siteFormGroup.dirty){
        this.onConfirmationModal()
      } else {
        this.confirmationService.onCloseModal()
        this.onCancelEmit.emit()
      };
    } else {
      if (
        this.siteFormGroup.controls.name.value === this.selectedSite.name &&
        this.siteFormGroup.controls.latitude.value === this.selectedSite.latitude &&
        this.siteFormGroup.controls.longitude.value === this.selectedSite.longitude &&
        this.siteFormGroup.controls.pole.value === this.selectedSite.pole
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
      title: 'Cancel add site',
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

    if(this.selectedSite){
      this._sitesManager.updateSite(this.selectedSite.id, this.siteFormGroup.getRawValue())
        .pipe(
          catchError((err) => {
            console.log('error => ', err)
  
            if (err.status === 400){
              this.toasterService.error( err?.errorsDetails?.at(0)?.message || 'Failed to create Sub Category.' , 3000);
            } else {
              this.toasterService.error('Failed to update Site.', 3000);
            }
            this.isLoading = false
            return EMPTY
          }),
          tap(v => {
            this.toasterService.success('Successfully changed data of site.', 3000);
             this.onRefreshEmit.emit()
          })
        ).subscribe()
      
    } else {
        this._sitesManager.createSite(this.siteFormGroup.getRawValue())
        .pipe(
          catchError((err) => {
            console.log('error => ', err)
  
            if (err.status === 400){
              this.toasterService.error( err?.errorsDetails?.at(0)?.message || 'Failed to create Sub Category.' , 3000);
            } else {
              this.toasterService.error('Failed to update Site.', 3000);
            }
            this.isLoading = false
            return EMPTY
          }),
          tap(v => {
            this.toasterService.success('Successfully changed data of site.', 3000);
             this.onRefreshEmit.emit()
          })
        ).subscribe()
    }

  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
