import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SlideAnimation, AccordionAnimation, FadeInOutAnimation } from '../../../../core/const/animation.const';

@Component({
  selector: 'app-card-basic',
  templateUrl: './card-basic.component.html',
  styleUrl: './card-basic.component.css',
  animations: [
    SlideAnimation,
    AccordionAnimation,
    FadeInOutAnimation
  ],
})
export class CardBasicComponent {
  @Input() title: string = 'Are you sure?';
  @Input() message: string = 'Do you want to proceed with this action?';
  @Input() primaryButtonColor: 'blue' | 'red' = 'blue';
  @Input() primaryButtonText: string = '';
  @Input() secondaryButtonText: string = '';
  @Input() isLoading: boolean = false;
  @Input() isCancelButton: boolean = true;
  @Input() imageUrl: string = '' //'../../../../../../assets/images/image-dummy.png';

  @Output() confirmed = new EventEmitter<void>();
  @Output() secondaryConfirmed = new EventEmitter<void>();
  @Output() canceled = new EventEmitter<void>();

  onConfirm(event: MouseEvent){
    event.stopPropagation();
    this.confirmed.emit();
  }

  onSecondaryConfirm(event: MouseEvent){
    event.stopPropagation();
    this.secondaryConfirmed.emit();
  }

  onCancel() {
    this.canceled.emit();
  }
}
