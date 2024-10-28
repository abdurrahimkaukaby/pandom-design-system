import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dropdown-card',
  templateUrl: './dropdown-card.component.html',
  styleUrl: './dropdown-card.component.css'
})
export class DropdownCardComponent implements OnChanges {
  @Input() title: string = 'Site-01';
  @Input() subtitle: string
  @Input() isBackgroundTransparent: boolean = false;
  @Input() isUppercase: boolean = false;
  @Input() isActive: boolean = false;
  @Input() isExpandList: boolean = false;
  @Input() isExpandFeature: boolean = false;
  @Input() icon: string;
  @Input() iconStyle: 'primary' | 'primary-hover' | 'secondary' = 'primary'
  @Input() activeStyle: 'primary' | 'secondary' | 'none' = 'primary'
  @Input() cardStyle: 'normal' | 'compact' | 'full' | 'full-header';
  @Input() avatarStyle: 'normal' | 'compact' | 'none' = 'normal';
  @Input() avatarTextSize: 'xxs' | 'xs' | 'sm' = 'xxs';
  @Input() border: boolean = true;
  @Input() iconButton: boolean = false;
  @Input() isTitleHide: boolean = false;

  @Output() onExpandEmit: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onExpandListEmit: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onBlurEmit: EventEmitter<void> = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['data'] &&
      changes['data']?.previousValue !== changes['data']?.currentValue!
    ) {}
  }

  onExpand(){
    this.onExpandEmit.emit(true)
  }

  onBlur(){
    this.onBlurEmit.emit()
  }

  onToggleExpandList(){
    this.onExpandListEmit.emit()
  }
}
