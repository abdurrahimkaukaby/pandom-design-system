import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-masterdata-basic-card',
  templateUrl: './masterdata-basic-card.component.html',
  styleUrls: ['./masterdata-basic-card.component.css']
})
export class MasterdataBasicCardComponent implements OnInit {
  @Input() dataName: string = 'Data name';
  @Input() placeholder: string = 'Enter data name';
  @Input() isExpand: boolean = false;

  @Output() onSaveEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() onCancelEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() onExpandEvent: EventEmitter<void> = new EventEmitter<void>();

  // isExpand : boolean = false

  dataNameForm = new FormControl('', Validators.required)

  constructor() { }

  ngOnInit(): void {
    this.dataNameForm.patchValue(this.dataName)
  }

  onExpand(){
    // this.isExpand = true;
    this.onExpandEvent.emit();
  }

  onCancel(){
    this.dataNameForm.setValue(this.dataName)
    this.isExpand = false
    this.onCancelEvent.emit();
  }

  onSave(){
    this.onSaveEvent.emit(this.dataNameForm.getRawValue())
  }

}
