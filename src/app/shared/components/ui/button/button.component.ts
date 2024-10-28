import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { HeroIconName } from 'ng-heroicon';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() disableTerm: boolean = false;
  @Input() iconRight: string
  @Input() iconLeft: string
  // @Input() text: string
  @Input() mode: 'normal' | 'compact' | 'wide' = 'normal'
  @Input() color: 'primary' | 'secondary' | 'ghost' | 'danger' = 'primary';

  @Output() onBlurEmit = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onBlur(){
    this.onBlurEmit.emit()
  }

}
