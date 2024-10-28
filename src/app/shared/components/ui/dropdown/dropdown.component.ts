import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {

  @Input() id: string;
  @Input() label: string;
  @Input() icon: string;
  @Input() placeholder: string = 'select one';
  @Input() value: number | string = 0;
  @Input() isRequired: boolean = false;
  @Input() isEnable: boolean = true;
  @Input() isMuted: boolean = false;
  @Input() control = new FormControl();
  @Input() options : {title: string, value: any}[]

}
