import { AfterContentChecked, AfterViewChecked, Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SlideAnimation, AccordionAnimation, FadeInOutAnimation } from '../../../../core/const/animation.const';
import { Datepicker } from 'flowbite-datepicker';

@Component({
  selector: 'app-date-picker-range',
  templateUrl: './date-picker-range.component.html',
  styleUrl: './date-picker-range.component.css',
  animations: [
    SlideAnimation,
    AccordionAnimation,
    FadeInOutAnimation
  ],
})
export class DatePickerRangeComponent implements OnInit, AfterContentChecked {
  @Input() startDateControl = new FormControl<string>(null)
  @Input() endDateControl = new FormControl<string>(null)
  
  startDate: FormControl;
  endDate: FormControl;

  isOpen = signal(false)
  today : string = null

  startDatePickerInstance: Datepicker
  endDatePickerInstance: Datepicker

  constructor() {
    // Initialize with today's date
    this.today = this.formatDateToFlowbite(new Date());
    this.startDate = new FormControl(this.formatDate(new Date()));
    this.endDate = new FormControl(this.formatDate(new Date()));
  }
  ngAfterContentChecked(): void {
    // console.log('check => ', this.formatDate(this.startDatePickerInstance.getDate() as unknown as Date));
    this.startDate.setValue(this.formatDate(this.startDatePickerInstance.getDate() as unknown as Date));
    this.endDate.setValue(this.formatDate(this.endDatePickerInstance.getDate() as unknown as Date));
  }

  ngOnInit(): void {
    this.initializeDatePicker();
  }

  // Format date as 'YYYY-MM-DD' (adjust as needed for the datepicker format)
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // Format date as 'MM/DD/YYYY' (adjust as needed for the datepicker format)
  formatDateToFlowbite(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${month}/${day}/${year}`;
  }

  initializeDatePicker(): void {
    const startDatePickerElement = document.getElementById('datepicker-inline-start');
    const endDatePickerElement = document.getElementById('datepicker-inline-end');

    if (startDatePickerElement) {
      // Set initial value to today in the date picker element as well
      this.startDatePickerInstance = new Datepicker(startDatePickerElement, {
        // Custom options for your datepicker, if needed
      });

      this.startDatePickerInstance.setDate(this.today);
    }

    if (endDatePickerElement) {
      // Set initial value to today in the date picker element as well
      this.endDatePickerInstance = new Datepicker(endDatePickerElement, {
        // Custom options for your datepicker, if needed
      });

      // Set the initial date (today) programmatically in the datepicker UI
      this.endDatePickerInstance.setDate(this.endDate.value);
      this.endDatePickerInstance.setDate(this.today);

    }
  }

  onApply(){
    this.startDateControl.patchValue(this.startDate.value)
    this.endDateControl.patchValue(this.endDate.value)
    this.startDatePickerInstance.setDate(this.today);
    this.endDatePickerInstance.setDate(this.today);
    this.isOpen.set(false)
  }

  onApplyToday(){
    this.startDateControl.patchValue(this.today)
    this.endDateControl.patchValue(this.today)
    this.isOpen.set(false)
  }

  onCancel(){
    this.isOpen.set(false)
  }

  onReset(){
    this.startDateControl.setValue(null)
    this.endDateControl.setValue(null)
    this.startDatePickerInstance.setDate(this.today);
    this.endDatePickerInstance.setDate(this.today);
  }
  
}
