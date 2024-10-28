import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.css'
})
export class ConfirmationModalComponent {
  @Input() title: string = 'Are you sure?';
  @Input() message: string = 'Do you want to proceed with this action?';
  @Input() backgroundColor: 'black' | 'transparent' = 'black';
  @Input() positionX: 'left' | 'right' | 'center' = 'center';
  @Input() confirmButtonColor: string = 'Yes';
  @Input() confirmButtonText: string = 'Yes';
  @Input() cancelButtonText: string = 'No';
  @Input() isLoading: boolean = false;

  @Output() confirmed = new EventEmitter<void>();
  @Output() canceled = new EventEmitter<void>();

  onConfirm(event: MouseEvent){
    event.stopPropagation();
    this.confirmed.emit();
  }

  doNothing(event: MouseEvent){
    event.stopPropagation();
  }

  onCancel() {
    this.canceled.emit();
  }

}
