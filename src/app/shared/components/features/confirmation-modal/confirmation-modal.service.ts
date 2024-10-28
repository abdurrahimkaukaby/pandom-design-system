import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ConfirmationOption } from './dto/confimation-option.dto';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {
  private confirmAction = new Subject<boolean>();
  confirmAction$ = this.confirmAction.asObservable();

  private isModalOpen = new Subject<boolean>();
  isModalOpen$ = this.isModalOpen.asObservable();

  private modalOption = new Subject<ConfirmationOption>();
  modalOption$ = this.modalOption.asObservable();

  private isLoading = new Subject<boolean>();
  isLoading$ = this.isLoading.asObservable();

  openConfirmationDialog(options: ConfirmationOption) {
    this.isModalOpen.next(true);
    this.modalOption.next(options);
  }

  onCloseModal() {
    this.isModalOpen.next(false);
  }

  confirm() {
    this.confirmAction.next(true);
  }

  cancel() {
    this.confirmAction.next(false);
  }

  onStartLoading() {
    this.isLoading.next(true);
  }

  onStopLoading() {
    this.isLoading.next(false);
  }
}
