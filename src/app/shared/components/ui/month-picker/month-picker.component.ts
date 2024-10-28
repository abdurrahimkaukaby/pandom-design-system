import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, takeUntil, tap } from 'rxjs';
import { SlideAnimation, AccordionAnimation, FadeInOutAnimation } from '../../../../core/const/animation.const';

@Component({
  selector: 'app-month-picker',
  templateUrl: './month-picker.component.html',
  styleUrl: './month-picker.component.css',
  animations: [
    SlideAnimation,
    AccordionAnimation,
    FadeInOutAnimation
  ],
})
export class MonthPickerComponent implements OnDestroy {
  @Input() control = new FormControl<string>(null)
  private readonly unsubscribe$: Subject<void> = new Subject();

  monthData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  isOpen : boolean = false;
  isSelectYear : boolean = false;

  yearRange: number[] = [];
  currentMonth: number;
  currentYear: number;
  startYear: number;
  selectedMonth: number;
  selectedYear: number;

  constructor() {
    const today = new Date();
    this.currentMonth = today.getMonth();
    this.currentYear = today.getFullYear();

    this.selectedYear = this.currentYear;
    
    // Generate a range of years, for example, from 1900 to 2100
    this.startYear = this.getStartOfDecade(this.currentYear);
    this.yearRange = this.generateYearRange(this.startYear);

    this.control.valueChanges
    .pipe(
      takeUntil(this.unsubscribe$),
      tap(v => {
        if (v && v !== ''){
          const [year, month] = v.split('-');

        // Convert to numbers
        this.selectedYear = parseInt(year);
        this.selectedMonth = parseInt(month);

        }
      })
    ).subscribe()
  }

  // Get the start of the decade for a given year
  getStartOfDecade(year) {
    return Math.floor(year / 10) * 10;
  }

  // Generate an array of 10 years from the start year
  generateYearRange(startYear) {
    return Array.from({ length: 10 }, (_, i) => startYear + i);
  }

  nextYear() {
    this.selectedYear = this.selectedYear + 1;
    // change year range
    this.startYear = this.getStartOfDecade(this.selectedYear);
    this.yearRange = this.generateYearRange(this.startYear);
    // change formcontrol if month already selected
    if (this.selectedMonth){
      this.control.patchValue(`${this.selectedYear}-${this.selectedMonth}`)
    }
  }

  // Method to go to the next decade
  nextYears() {
    this.startYear += 10;
    this.yearRange = this.generateYearRange(this.startYear);
  }

  previousYear() {
    this.selectedYear = this.selectedYear - 1;
    // change year range
    this.startYear = this.getStartOfDecade(this.selectedYear);
    this.yearRange = this.generateYearRange(this.startYear);
    // change formcontrol if month already selected
    if (this.selectedMonth){
      this.control.patchValue(`${this.selectedYear}-${this.selectedMonth}`)
    }
  }

  // Method to go to the previous decade
  previousYears() {
    this.startYear -= 10;
    this.yearRange = this.generateYearRange(this.startYear);
  }

  onSelectMonth(indexMonth: number){
    this.selectedMonth = indexMonth + 1;
    this.control.patchValue(`${this.selectedYear}-${this.selectedMonth}`)
  }

  onSelectYear(indexYear: number){
    this.selectedYear = indexYear;
    if (this.selectedMonth){
      this.control.patchValue(`${this.selectedYear}-${this.selectedMonth}`)
    }
    this.isSelectYear = false
  }

  onOpenMonthPicker(){
    this.isOpen = true;
  }

  onCloseMonthPicker(){
    setTimeout(()=> {
      this.isSelectYear = false;
      this.isOpen = false;
    },100)
  }

  onSelectingYears(){
    this.isSelectYear = true;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
