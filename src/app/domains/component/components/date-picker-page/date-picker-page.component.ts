import { AfterViewInit, Component, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AccordionAnimation } from '../../../../core/const/animation.const';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-date-picker-page',
  templateUrl: './date-picker-page.component.html',
  styleUrl: './date-picker-page.component.css',
  animations: [
    AccordionAnimation
  ],
})
export class DatePickerPageComponent implements AfterViewInit {
  isScrolled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  selectedTab : string = 'usage'

  yourCode: string = `
    <app-date-picker></app-date-picker>
  `;

  codeHtmlDatePicker: string = `
    <button 
        (blur)="onCloseDatePicker()"
        (click)="!monthPicker ? onOpenDatePicker() : onOpenMonthPicker()"
        [ngClass]="control.value && control.value !== ''? 'text-text-text-primary' : 'text-text-text-caption'"
        class="flex relative w-full items-center px-2 py-[6px] gap-[6px] border text-sm rounded-md focus:ring-1 focus:ring-etma-blue-200 shadow-sm bg-background-background-base-default">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="#888895" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 2H11.5V1.5C11.5 1.36739 11.4473 1.24021 11.3536 1.14645C11.2598 1.05268 11.1326 1 11 1C10.8674 1 10.7402 1.05268 10.6464 1.14645C10.5527 1.24021 10.5 1.36739 10.5 1.5V2H5.5V1.5C5.5 1.36739 5.44732 1.24021 5.35355 1.14645C5.25979 1.05268 5.13261 1 5 1C4.86739 1 4.74021 1.05268 4.64645 1.14645C4.55268 1.24021 4.5 1.36739 4.5 1.5V2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8946 2.73478 14 3 14H13C13.2652 14 13.5196 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2ZM4.5 3V3.5C4.5 3.63261 4.55268 3.75979 4.64645 3.85355C4.74021 3.94732 4.86739 4 5 4C5.13261 4 5.25979 3.94732 5.35355 3.85355C5.44732 3.75979 5.5 3.63261 5.5 3.5V3H10.5V3.5C10.5 3.63261 10.5527 3.75979 10.6464 3.85355C10.7402 3.94732 10.8674 4 11 4C11.1326 4 11.2598 3.94732 11.3536 3.85355C11.4473 3.75979 11.5 3.63261 11.5 3.5V3H13V5H3V3H4.5ZM13 13H3V6H13V13Z" />
        </svg>
        {{
            control.value && control.value !== '' && !monthPicker ? (control.value | date : 'MMM d, y') :
            control.value && control.value !== '' && monthPicker ? (control.value | date : 'MMM y') :
            monthPicker? 'Select month': 'Select date' }}
        <!-- <svg width="16" height="16" viewBox="0 0 16 16" fill="#888895" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.61407 6.14739C5.61405 6.1474 5.61404 6.14742 5.61402 6.14744M5.61407 6.14739L5.61402 6.14744M5.61407 6.14739L5.61402 6.14744M5.61407 6.14739L5.61402 6.14744M10.3998 9.8666L10.3857 9.85249L10.0605 9.52722L10.3998 9.8666ZM10.3998 9.8666V9.8666ZM5.61408 9.85255L5.61402 9.85249C5.61404 9.85251 5.61406 9.85253 5.61408 9.85255Z" stroke="#4D4D57"/>
        </svg> -->
        <div class="flex h-3 w-3 items-center">
            <mat-icon class="text-[#888895]" svgIcon="ph-regular:caret-up-down"></mat-icon>
        </div>
        <div @accordion *ngIf="isOpen" class="flex-col absolute z-30 p-4 rounded-md border shadow top-full left-0 mt-1 bg-background-background-base-default text-text-text-primary">
            <div *ngIf="!isSelectYear" class="flex items-center justify-between w-[224px] h-6">
                <div (click)="previousYear()" class="hover:bg-background-background-base-hover rounded-[4px] border p-[2px] cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="#888895" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.62219 8.28941L9.78859 12.38C9.84686 12.4373 9.92112 12.4763 10.002 12.4921C10.0829 12.5079 10.1667 12.4998 10.2428 12.4688C10.319 12.4379 10.3841 12.3854 10.4299 12.318C10.4757 12.2507 10.5001 12.1716 10.5 12.0906V3.90938C10.5001 3.82843 10.4757 3.74928 10.4299 3.68195C10.3841 3.61462 10.319 3.56214 10.2428 3.53116C10.1667 3.50017 10.0829 3.49207 10.002 3.50788C9.92112 3.52369 9.84686 3.5627 9.78859 3.61997L5.62219 7.71059C5.58346 7.74858 5.55273 7.79369 5.53176 7.84335C5.51079 7.89301 5.5 7.94624 5.5 8C5.5 8.05376 5.51079 8.10699 5.53176 8.15665C5.55273 8.20631 5.58346 8.25142 5.62219 8.28941Z" />
                    </svg>
                </div>
                <span (click)="onSelectingYears()" class="font-semibold cursor-pointer">
                    {{selectedYear}}
                </span>
                <div (click)="nextYear()" class="hover:bg-background-background-base-hover rounded-[4px] border p-[2px] cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="#888895" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.3778 8.28941L6.21141 12.38C6.15314 12.4373 6.07888 12.4763 5.99801 12.4921C5.91715 12.5079 5.83333 12.4998 5.75715 12.4688C5.68098 12.4379 5.61589 12.3854 5.57011 12.318C5.52434 12.2507 5.49994 12.1716 5.5 12.0906V3.90938C5.49994 3.82843 5.52434 3.74928 5.57011 3.68195C5.61589 3.61462 5.68098 3.56214 5.75715 3.53116C5.83333 3.50017 5.91715 3.49207 5.99801 3.50788C6.07888 3.52369 6.15314 3.5627 6.21141 3.61997L10.3778 7.71059C10.4165 7.74858 10.4473 7.79369 10.4682 7.84335C10.4892 7.89301 10.5 7.94624 10.5 8C10.5 8.05376 10.4892 8.10699 10.4682 8.15665C10.4473 8.20631 10.4165 8.25142 10.3778 8.28941Z"/>
                    </svg>
                </div>
            </div>
            <div *ngIf="isSelectYear" class="flex items-center justify-between w-[224px] h-6">
                <div (click)="previousYears()" class="hover:bg-background-background-base-hover rounded-[4px] border p-[2px] cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="#888895" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.62219 8.28941L9.78859 12.38C9.84686 12.4373 9.92112 12.4763 10.002 12.4921C10.0829 12.5079 10.1667 12.4998 10.2428 12.4688C10.319 12.4379 10.3841 12.3854 10.4299 12.318C10.4757 12.2507 10.5001 12.1716 10.5 12.0906V3.90938C10.5001 3.82843 10.4757 3.74928 10.4299 3.68195C10.3841 3.61462 10.319 3.56214 10.2428 3.53116C10.1667 3.50017 10.0829 3.49207 10.002 3.50788C9.92112 3.52369 9.84686 3.5627 9.78859 3.61997L5.62219 7.71059C5.58346 7.74858 5.55273 7.79369 5.53176 7.84335C5.51079 7.89301 5.5 7.94624 5.5 8C5.5 8.05376 5.51079 8.10699 5.53176 8.15665C5.55273 8.20631 5.58346 8.25142 5.62219 8.28941Z" />
                    </svg>
                </div>
                <span class="font-semibold">
                    {{startYear + '-' + yearRange[9]}}
                </span>
                <div (click)="nextYears()" class="hover:bg-background-background-base-hover rounded-[4px] border p-[2px] cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="#888895" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.3778 8.28941L6.21141 12.38C6.15314 12.4373 6.07888 12.4763 5.99801 12.4921C5.91715 12.5079 5.83333 12.4998 5.75715 12.4688C5.68098 12.4379 5.61589 12.3854 5.57011 12.318C5.52434 12.2507 5.49994 12.1716 5.5 12.0906V3.90938C5.49994 3.82843 5.52434 3.74928 5.57011 3.68195C5.61589 3.61462 5.68098 3.56214 5.75715 3.53116C5.83333 3.50017 5.91715 3.49207 5.99801 3.50788C6.07888 3.52369 6.15314 3.5627 6.21141 3.61997L10.3778 7.71059C10.4165 7.74858 10.4473 7.79369 10.4682 7.84335C10.4892 7.89301 10.5 7.94624 10.5 8C10.5 8.05376 10.4892 8.10699 10.4682 8.15665C10.4473 8.20631 10.4165 8.25142 10.3778 8.28941Z"/>
                    </svg>
                </div>
            </div>
            <div *ngIf="!isSelectYear" class="grid grid-cols-3 gap-1 pt-4">
                <div 
                    [ngClass]="selectedMonth === (indexMonth)? 'bg-background-background-brand-default text-text-text-inverse' : (indexMonth) === currentMonth && selectedYear === currentYear? 'bg-etma-neutral-200 hover:bg-background-background-base-hover' : 'hover:bg-background-background-base-hover'"
                    class="flex items-center justify-center h-8 rounded-md px-2 duration-150"
                    (click)="onSelectMonth(indexMonth)"
                    *ngFor="let month of shortenMonths; index as indexMonth">
                    {{month}}
                </div>
            </div>
            <div *ngIf="isSelectYear" class="grid grid-cols-3 gap-1 pt-4">
                <div 
                    [ngClass]="selectedYear === year? 'bg-background-background-brand-default text-text-text-inverse' : year === currentYear ? 'bg-etma-neutral-200 hover:bg-background-background-base-hover' : 'hover:bg-background-background-base-hover'"
                    class="flex items-center justify-center h-8 rounded-md px-2 duration-150"
                    (click)="onSelectYear(year)"
                    *ngFor="let year of yearRange; index as indexYear">
                    {{year}}
                </div>
            </div>
        </div>
        <div *ngIf="showCalendar && !isOpen && !isSelectYear && !monthPicker" class="absolute bg-white border z-50 top-9 left-0 p-2 rounded-md shadow w-[224px]">
            <div class="flex w-full justify-between content-between mt-2">
              <div class="flex items-center px-1 py-1 border hover:bg-slate-200 rounded-[4px]" (click)="previousMonth()">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#888895" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.62219 8.28941L9.78859 12.38C9.84686 12.4373 9.92112 12.4763 10.002 12.4921C10.0829 12.5079 10.1667 12.4998 10.2428 12.4688C10.319 12.4379 10.3841 12.3854 10.4299 12.318C10.4757 12.2507 10.5001 12.1716 10.5 12.0906V3.90938C10.5001 3.82843 10.4757 3.74928 10.4299 3.68195C10.3841 3.61462 10.319 3.56214 10.2428 3.53116C10.1667 3.50017 10.0829 3.49207 10.002 3.50788C9.92112 3.52369 9.84686 3.5627 9.78859 3.61997L5.62219 7.71059C5.58346 7.74858 5.55273 7.79369 5.53176 7.84335C5.51079 7.89301 5.5 7.94624 5.5 8C5.5 8.05376 5.51079 8.10699 5.53176 8.15665C5.55273 8.20631 5.58346 8.25142 5.62219 8.28941Z" />
                </svg>
              </div>
              <div>
                <span (click)="onOpenMonthPicker()" class="font-semibold text-text-text-primary">
                  {{ months[selectedMonth] }} 
                </span>
                <span (click)="onSelectingYears()" class="font-semibold text-text-text-primary">
                  {{ selectedYear }}
                </span>
              </div>
              <div class="flex items-center px-1 py-1 border hover:bg-slate-200 rounded-[4px]" (click)="nextMonth()">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#888895" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.3778 8.28941L6.21141 12.38C6.15314 12.4373 6.07888 12.4763 5.99801 12.4921C5.91715 12.5079 5.83333 12.4998 5.75715 12.4688C5.68098 12.4379 5.61589 12.3854 5.57011 12.318C5.52434 12.2507 5.49994 12.1716 5.5 12.0906V3.90938C5.49994 3.82843 5.52434 3.74928 5.57011 3.68195C5.61589 3.61462 5.68098 3.56214 5.75715 3.53116C5.83333 3.50017 5.91715 3.49207 5.99801 3.50788C6.07888 3.52369 6.15314 3.5627 6.21141 3.61997L10.3778 7.71059C10.4165 7.74858 10.4473 7.79369 10.4682 7.84335C10.4892 7.89301 10.5 7.94624 10.5 8C10.5 8.05376 10.4892 8.10699 10.4682 8.15665C10.4473 8.20631 10.4165 8.25142 10.3778 8.28941Z"/>
                </svg>
              </div>
            </div>
        
            <div class="grid grid-cols-7 p-1 text-center align-middle">
              <span *ngFor="let day of days">{{ day }}</span>
            </div>
            <div class="grid grid-cols-7 cursor-pointer p-1 text-center align-middle rounded-md">
              <span *ngFor="let date of calendarDays"
                  class="hover:bg-slate-200 rounded-md p-1"
                  [ngClass]="{ 
                    'text-black': date.isCurrentMonth, 
                    'bg-background-background-brand-default hover:bg-background-background-brand-hover text-white' : (date?.month + 1).toString() === (control?.value | date : 'M') && (date.day.toString() === (control?.value | date : 'd')) && date.year.toString() === (control?.value | date : 'y'),
                    'text-[#aaa]': !date.isCurrentMonth,
                    }"
                  (click)="selectDate(date)">
                {{ date.day }}
              </span>
            </div>
          </div>
    </button>
  `;

  codeTsDatePicker: string = `
    @Component({
      selector: 'app-date-picker',
      standalone: true,
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
      @Input() monthPicker : boolean = false
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
        
        this.startYear = this.getStartOfDecade(this.currentYear);
        this.yearRange = this.generateYearRange(this.startYear);

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
        if (this.selectedMonth){
          this.control.patchValue(this.selectedYear+'-'+this.selectedMonth)
        }
      }

      nextYears() {
        this.startYear += 10;
        this.yearRange = this.generateYearRange(this.startYear);
      }

      previousYear() {
        this.selectedYear = this.selectedYear - 1;
        this.startYear = this.getStartOfDecade(this.selectedYear);
        this.yearRange = this.generateYearRange(this.startYear);
        if (this.selectedMonth){
          this.control.patchValue(this.selectedYear+'-'+this.selectedMonth)
        }
      }

      previousYears() {
        this.startYear -= 10;
        this.yearRange = this.generateYearRange(this.startYear);
      }

      onSelectMonth(indexMonth: number){
        console.log(indexMonth);
        
        this.selectedMonth = indexMonth;
        this.generateCalendar(this.selectedMonth, this.selectedYear);
        
        if (this.monthPicker){
          this.control.patchValue(this.selectedYear+'-'+this.selectedMonth);
        }

        this.isOpen = false;
      }

      onSelectYear(indexYear: number){
        this.selectedYear = indexYear;
        // this.generateCalendar(this.currentMonth, this.currentYear);
        this.generateCalendar(this.selectedMonth, this.selectedYear);

        if (this.monthPicker){
          this.control.patchValue(this.selectedYear+'-'+this.selectedMonth);
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
      
        const firstDayOfMonth = new Date(year, month, 1).getDay(); // Day of the week (0: Sunday, 1: Monday, etc.)
        const daysInCurrentMonth = new Date(year, month + 1, 0).getDate(); // Number of days in the current month
      
        const previousMonth = month === 0 ? 11 : month - 1;
        const previousMonthYear = month === 0 ? year - 1 : year;
        const daysInPreviousMonth = new Date(previousMonthYear, previousMonth + 1, 0).getDate();
      
        for (let i = firstDayOfMonth - 1; i >= 0; i--) {
          const day = daysInPreviousMonth - i;
          this.calendarDays.push({
            day,
            month: previousMonth,
            year: previousMonthYear,
            isCurrentMonth: false
          });
        }
      
        for (let i = 1; i <= daysInCurrentMonth; i++) {
          this.calendarDays.push({
            day: i,
            month: month,
            year: year,
            isCurrentMonth: true
          });
        }
      
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

        this.control.patchValue((this.selectedMonth + 1)+'-'+this.selectedDate+'-'+this.selectedYear);
        this.showCalendar = false;
      }


      ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
      }

  `;
  
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    const verticalOffset =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (verticalOffset > 240) {
      this.isScrolled$.next(false);
    } else {
      this.isScrolled$.next(true);
    }
  }
  
  ngAfterViewInit() {
    Prism.highlightAll();
  }

  onSelectedTab(tab:string){
    this.selectedTab = tab
  }
}
