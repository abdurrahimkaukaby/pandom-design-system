import { Component } from '@angular/core';
import { ConfirmationService } from '../confirmation-modal.service';
import { ConfirmationOption } from '../dto/confimation-option.dto';

@Component({
  selector: 'app-confirmation-wrapper',
  templateUrl: './confirmation-wrapper.component.html',
  styleUrl: './confirmation-wrapper.component.css'
})
export class ConfirmationWrapperComponent {
  showModal = false;
  isLoading = false;
  options: ConfirmationOption = {
    title: 'Are you sure?',
    message: 'Do you want to proceed with this action?',
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
    confirmButtonColor: 'blue',
    backgroundColor: 'black',
    positionX: 'center'
  };

  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit(): void {
    this.confirmationService.modalOption$.subscribe(options => {
      this.options = options;
    });

    this.confirmationService.isModalOpen$.subscribe(v => {
      this.showModal = v;
    });

    this.confirmationService.isLoading$.subscribe(v => {
      this.isLoading = v;
    });

  }

  onConfirm() {
    this.confirmationService.confirm();
  }

  onCancel() {
    this.showModal = false;
    this.confirmationService.cancel();
  }
}
