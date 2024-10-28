import { Component, EventEmitter, Input, Output } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-dropdown-description',
  templateUrl: './dropdown-description.component.html',
  styleUrl: './dropdown-description.component.css'
})
export class DropdownDescriptionComponent {
  @Input() selectedDropdown : string = 'Pump'
  @Input() dropdowns : {id:number, value: string, description : string}[] =[
    {
      value: 'super admin',
      description: 'has permission to access the ETMA Dashboard and ETMA Field Operator, while also able to do data editing and acknowledge actions.',
      id: 1
    },
    {
      value: 'admin',
      description: 'has permission to access the ETMA Dashboard and ETMA Field Operator, while also able to do data editing but no acknowledge actions.',
      id: 2
    },
    {
      value: 'operator',
      description: 'has permission only to access the ETMA Field Operator mobile web app.',
      id: 3
    }
  ]

  @Output() onEmitDropdown = new EventEmitter<{id:number, value: string, description : string}>();

  onSelectDropdown(dropdown: {id:number, value: string, description : string}){
    console.log('emit dropdesk => ', dropdown);
    
    this.onEmitDropdown.emit(dropdown);
  }
}
