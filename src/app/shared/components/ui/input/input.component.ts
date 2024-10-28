import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit, OnChanges {
  // input setting
  @Input() inputId: string = '';
  @Input() style: string = '';
  @Input() size: string = 'p-2';
  @Input() oninput: any;
  @Input() description: string = '';
  @Input() tooltip: string = '';
  @Input() validatorIcon: boolean = true;
  @Input() isError: boolean = false;
  @Input() control = new FormControl();
  @Input() label: string = '';
  @Input() isDisabled: boolean = false;
  @Input() border: boolean;
  @Input() placeholder: string = '';
  @Input() isPassword: boolean = false;
  @Input() isSearch: boolean = false;
  @Input() isUppercase: boolean = false;
  @Input() isRequired: boolean = false;
  @Input() validatorRequiredMessage : string = 'The field is required';
  @Input() inputType:
    | 'text'
    | 'number'
    | 'date'
    | 'datetime'
    | 'checkbox'
    | 'datetime-local'
    | 'password' = 'text';
  // End of input setting

  @Output() onEnterEmit = new EventEmitter<string>();
  @Output() isFocusEmit = new EventEmitter<boolean>();
  @Output() isBlurEmit = new EventEmitter<boolean>();

  borderData: string = '';
  focus: boolean;

  // error message
  errorMessage: Record<string, string> = {
    required: this.validatorRequiredMessage,
    email: 'The e-mail is invalid',
    max: 'The input is exceeding maximum limit',
    maxlength: 'The input is exceeding maximum char length limit',
    min: 'The input is below minimum limit',
    minlength: 'The input is below minimum char limit',
    pattern:'The input pattern is invalid because it contains a forbidden character',
  };
  // End of error message
  
  inputTypePassword: 'text' | 'password' = 'password'
  
  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['isError'] &&
      changes['isError']?.previousValue !== changes['isError']?.currentValue!
    ) {}
    if (
      changes['validatorRequiredMessage'] &&
      changes['validatorRequiredMessage']?.previousValue !== changes['validatorRequiredMessage']?.currentValue!
    ) {
      this.errorMessage = {
        required: this.validatorRequiredMessage,
        email: 'The e-mail is invalid',
        max: 'The input is exceeding maximum limit',
        maxlength: 'The input is exceeding maximum char length limit',
        min: 'The input is below minimum limit',
        minlength: 'The input is below minimum char limit',
        pattern:'The input pattern is invalid because it contains a forbidden character',
      };
    }
  }
  
  ngOnInit(): void {
    if (this.border) {
      this.borderData = '1px solid #27AE60';
    }
  }

  onFocus() {
    // event.stopPropagation();
    this.focus = true;
    this.isFocusEmit.emit(this.focus)
  }

  onBlur() {
    this.focus = false;
    this.isBlurEmit.emit()
  }

  onEnter() {
    this.onEnterEmit.emit(this.control.value)
  }

  togglePasswordVisibility() {
    if (this.inputTypePassword === 'text') {
      this.inputTypePassword = 'password'
    } else {
      this.inputTypePassword = 'text'
    }
  }
}
