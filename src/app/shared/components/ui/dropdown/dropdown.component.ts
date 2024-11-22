import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AccordionAnimation } from '../../../../core/const/animation.const';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
  animations: [
    AccordionAnimation
  ],
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
  @Input() isSearch: boolean = false;
  @Input() isSelectedIcon: boolean = false;
  @Input() isCustomStyle: boolean = false;
  @Input() control = new FormControl();
  @Input() searchForm = new FormControl('')
  @Input() options : {title: string, value: any}[]
  // @Output() onFocusSearch = new EventEmitter<void>();

  isStyleDropdownOpen: boolean =false;
  isSearchFocus: boolean =false;

  onBlurDropdown(){
    setTimeout(()=> {
      if(!this.isSearchFocus){
        this.isStyleDropdownOpen = false
      }
    }, 100)
  }

  onFocusDropdown(){
    this.isStyleDropdownOpen = !this.isStyleDropdownOpen
  }

  onSetSearchFocus(){
    // this.onFocusSearch.emit();
    this.isSearchFocus = true
  }

  onSelectDropdown(dropdown: any){
    this.control.patchValue(dropdown)

    this.isSearchFocus = false;
    if(!this.isSelectedIcon){
      this.searchForm.patchValue('')
      this.isStyleDropdownOpen = false
    }
  }

  onBlurSearch(){
    this.isSearchFocus = false
    const input = document.getElementById('dropdown'+this.id) as HTMLInputElement;
      if (input) {
        input.focus();
      }
  }

}
