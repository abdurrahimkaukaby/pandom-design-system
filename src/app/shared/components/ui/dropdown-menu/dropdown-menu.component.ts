import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface dropdownMenuDTO {icon : 'eye' | 'pencil' | 'download' | 'printer' | 'trash' | 'prohibit' | 'power', text: string}
@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.css'
})
export class DropdownMenuComponent {
  @Input() menus: {icon : 'eye' | 'pencil' | 'download' | 'printer' | 'trash' | 'prohibit' | 'power', text: string}[] = []
  @Input() mode: 'wide' | 'compact' = 'compact'

  @Output() onIconEmit = new EventEmitter<string>();

  onCancel(){
    this.onIconEmit.emit(null)
  }

  onSelect(icon : string){
    // console.log('emitted', icon);
    
    this.onIconEmit.emit(icon)
  }
}
