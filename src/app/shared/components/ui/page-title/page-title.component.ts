import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.css'
})
export class PageTitleComponent {
  @Input() title: string;
  @Input() iconLeft: string;
  @Input() subtitle: string;
  @Input() imageUrl: string = ''
  @Input() border: boolean = true;
  @Input() buttonContent: string;
  @Input() buttonColor: 'primary' | 'secondary' | 'ghost' | 'danger' = 'primary';
  @Output() onClickButton: EventEmitter<void> = new EventEmitter<void>();

  onButtonClicked(){
    this.onClickButton.emit()
  }
}
