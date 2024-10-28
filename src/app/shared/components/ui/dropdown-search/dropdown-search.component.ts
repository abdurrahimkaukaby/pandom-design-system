import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown-search',
  templateUrl: './dropdown-search.component.html',
  styleUrl: './dropdown-search.component.css'
})
export class DropdownSearchComponent {
  @Input() isSearch : boolean = true
  @Input() placeholder : string = 'search'
  @Input() selectedDropdown : any = null
  @Input() searchForm = new FormControl('')
  @Input() dropdowns : {title: string, value: any}[] = []
  @Output() onEmitDropdown = new EventEmitter<any>();
  @Output() onFocusSearch = new EventEmitter<void>();

  onSelectDropdown(dropdown: any){
    this.onEmitDropdown.emit(dropdown);
  }

  onSetSearchFocus(event : boolean){
    this.onFocusSearch.emit();
  }

}
