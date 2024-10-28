import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { ConfirmationService } from '../../confirmation-modal/confirmation-modal.service';
import { ToasterService } from '../../toaster/toaster.service';
import { take } from 'rxjs';
import { SlideAnimation, AccordionAnimation, FadeInOutAnimation } from '../../../../../core/const/animation.const';

@Component({
  selector: 'app-view-specification',
  templateUrl: './view-specification.component.html',
  styleUrl: './view-specification.component.css',
  animations: [
    SlideAnimation,
    AccordionAnimation,
    FadeInOutAnimation
  ],
})
export class ViewSpecificationComponent {
  @Input() selectedEquipment : any
  @Output() onCancelEmit = new EventEmitter<void>();
  @Output() onRefreshEmit = new EventEmitter<void>();

  isLoading: boolean = false

  isExpandGeneral : boolean = true;
  isExpandTechnical : boolean = false;
  isExpandQrCode : boolean = true;

  constructor(
    private confirmationService: ConfirmationService,
    private toasterService: ToasterService,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['selectedEquipment'] &&
      changes['selectedEquipment']?.previousValue !== changes['selectedEquipment']?.currentValue!
    ) {
      
    }
  }

  onToggleGeneral(event: MouseEvent){
    event.stopPropagation();
    this.isExpandGeneral = !this.isExpandGeneral;
  }

  onToggleTechnical(event: MouseEvent){
    event.stopPropagation();
    this.isExpandTechnical = !this.isExpandTechnical;
  }

  onToggleQrCode(event: MouseEvent){
    event.stopPropagation();
    this.isExpandQrCode = !this.isExpandQrCode;
  }

  doNothing(event: MouseEvent){
    event.stopPropagation();
  }
  
  onCancel(){
    this.confirmationService.onCloseModal()
    this.onCancelEmit.emit()
    // this.confirmationService.openConfirmationDialog({
    //   title: 'Cancel add brand & type',
    //   message: 'Are you sure? your progress will not be saved.',
    //   confirmButtonText: 'Yes, Cancel',
    //   cancelButtonText: 'Stay here',
    //   confirmButtonColor: 'red',
    //   backgroundColor: 'transparent',
    //   positionX: 'right'
    // });
    // // this.confirmationService.onStartLoading();

    // this.confirmationService.confirmAction$
    // .pipe(
    //   take(1)
    // )
    // .subscribe(confirmed => {
    //   if (confirmed) {
    //     // Proceed with the delete action
    //     console.log('Cancel confirmaed');
    //     this.confirmationService.onCloseModal()
    //     this.onCancelEmit.emit()
    //   } else {
    //     console.log('Cancel cancelled');
    //   }
    // });
  }

  onSubmit(event: MouseEvent){
    event.stopPropagation();
    this.isLoading = true
    console.log('submit')
    this.toasterService.success('Successfully changed data of brand & type.', 3000);
  }
}
