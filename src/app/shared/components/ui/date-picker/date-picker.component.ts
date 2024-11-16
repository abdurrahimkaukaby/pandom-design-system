import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, takeUntil, tap } from 'rxjs';
import { SlideAnimation, AccordionAnimation, FadeInOutAnimation } from '../../../../core/const/animation.const';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css',
  animations: [
    SlideAnimation,
    AccordionAnimation,
    FadeInOutAnimation
  ],
})
export class DatePickerComponent implements OnDestroy {
  @Input() control = new FormControl<string>(null)
  private readonly unsubscribe$: Subject<void> = new Subject();

  @Output() onFocusEmit = new EventEmitter<void>();
  @Output() onBlurEmit = new EventEmitter<void>();

  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  shortenMonths = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  // monthData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  isOpen : boolean = false;

  showCalendar = false;
  calendarDays = [];
  isSelectYear : boolean = false;

  yearRange: number[] = [];
  currentMonth: number;
  currentYear: number;
  startYear: number;
  selectedDate: number;
  selectedMonth: number;
  selectedYear: number;

  constructor() {
    const today = new Date();
    this.currentMonth = today.getMonth();
    this.currentYear = today.getFullYear();

    this.selectedYear = this.currentYear;
    this.selectedMonth = this.currentMonth;
    
    // Generate a range of years, for example, from 1900 to 2100
    this.startYear = this.getStartOfDecade(this.currentYear);
    this.yearRange = this.generateYearRange(this.startYear);

    // this.control.valueChanges
    // .pipe(
    //   takeUntil(this.unsubscribe$),
    //   tap(v => {
    //     if (v && v !== ''){
    //       const [year, month] = v.split('-');

    //     // Convert to numbers
    //     this.selectedYear = parseInt(year);
    //     this.selectedMonth = parseInt(month);

    //     }
    //   })
    // ).subscribe()
  }

  // Get the start of the decade for a given year
  getStartOfDecade(year) {
    return Math.floor(year / 10) * 10;
  }

  // Generate an array of 10 years from the start year
  generateYearRange(startYear: number) {
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
    console.log(indexMonth);
    
    this.selectedMonth = indexMonth;
    this.generateCalendar(this.selectedMonth, this.selectedYear);
    
    this.isOpen = false;
  }

  onSelectYear(indexYear: number){
    this.selectedYear = indexYear;
    // this.generateCalendar(this.currentMonth, this.currentYear);
    this.generateCalendar(this.selectedMonth, this.selectedYear);

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

  onOpenDatePicker(){
    this.showCalendar = true;
    this.onFocusEmit.emit();
  }

  onCloseDatePicker(){
    setTimeout(()=> {
      this.isSelectYear = false;
      this.showCalendar = false;
      this.isOpen = false;
      this.onBlurEmit.emit();
    },100)
  }

  onSelectingYears(){
    this.isSelectYear = true;
    this.isOpen = true;
  }

  ngOnInit(): void {
    this.generateCalendar(this.currentMonth, this.currentYear);
  }

  toggleCalendar(): void {
    this.showCalendar = !this.showCalendar;
  }

  generateCalendar(month: number, year: number): void {
    this.calendarDays = [];
  
    // Get the first and last day of the current month
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // Day of the week (0: Sunday, 1: Monday, etc.)
    const daysInCurrentMonth = new Date(year, month + 1, 0).getDate(); // Number of days in the current month
  
    // Get the number of days in the previous month
    const previousMonth = month === 0 ? 11 : month - 1;
    const previousMonthYear = month === 0 ? year - 1 : year;
    const daysInPreviousMonth = new Date(previousMonthYear, previousMonth + 1, 0).getDate();
  
    // Add the last few days of the previous month
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      const day = daysInPreviousMonth - i;
      this.calendarDays.push({
        day,
        month: previousMonth,
        year: previousMonthYear,
        isCurrentMonth: false
      });
    }
  
    // Add the days of the current month
    for (let i = 1; i <= daysInCurrentMonth; i++) {
      this.calendarDays.push({
        day: i,
        month: month,
        year: year,
        isCurrentMonth: true
      });
    }
  
    // Fill the remaining days of the calendar with the next month's days
    const remainingDays = 42 - this.calendarDays.length; // 6 rows * 7 columns = 42 days in total on the calendar grid
    for (let i = 1; i <= remainingDays; i++) {
      const nextMonth = month === 11 ? 0 : month + 1;
      const nextMonthYear = month === 11 ? year + 1 : year;
      this.calendarDays.push({
        day: i,
        month: nextMonth,
        year: nextMonthYear,
        isCurrentMonth: false
      });
    }
  }

  previousMonth(): void {
    if (this.selectedMonth === 0) {
      this.selectedMonth = 11;
      this.selectedYear--;
    } else {
      this.selectedMonth--;
    }
    this.generateCalendar(this.selectedMonth, this.selectedYear);
  }

  nextMonth(): void {
    if (this.selectedMonth === 11) {
      this.selectedMonth = 0;
      this.selectedYear++;
    } else {
      this.selectedMonth++;
    }
    this.generateCalendar(this.selectedMonth, this.selectedYear);
  }

  selectDate(date: any): void {
    console.log('before',date)
    this.selectedDate = date.day
    this.selectedMonth = date.month
    this.selectedYear = date.year
    console.log(date)
    console.log(this.selectedDate, this.selectedMonth, this.selectedYear)

    this.control.patchValue(`${this.selectedMonth + 1}-${this.selectedDate}-${this.selectedYear}`);
    this.showCalendar = false;
  }


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}

