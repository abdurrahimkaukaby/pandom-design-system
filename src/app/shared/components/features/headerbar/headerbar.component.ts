import { Component, OnDestroy, OnInit } from '@angular/core';
import { SidebarService } from '../layout/sidebar/sidebar.service';
import { distinctUntilChanged, lastValueFrom, Subject, take, takeUntil, tap } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';
import { ConfirmationService } from '../confirmation-modal/confirmation-modal.service';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerbar',
  templateUrl: './headerbar.component.html',
  styleUrl: './headerbar.component.css',
  animations: [
    trigger('slide', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.1s', style({ opacity: 1  })),
      ]),
      transition(':leave', [animate('0.1s', style({ opacity: 0, height: 0 }))]),
    ]),
    trigger('accordion', [
      transition(':enter', [
        style({
          height: 0
        }),
        animate(100, style({
          height: '*'
        }))
      ]),
      transition(':leave', [
        animate(100, style({
          height: 0
        }))
      ])
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.1s', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('0.1s', style({ opacity: 0 }))]),
    ]),
  ],
})
export class HeaderbarComponent implements OnInit, OnDestroy {
  private readonly unsubscribe$: Subject<void> = new Subject();
  
  isSidebarOpen : boolean
  isExpand : boolean = false

  today = new Date();

  // Get day of the week (0-6)
  dayOfWeek = this.today.getDay();

  // Array of day names
  daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Format the date
  formattedDate = this.daysOfWeek[this.dayOfWeek] + ' - ' + this.today.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
  
  constructor(
    private confirmationService: ConfirmationService,
    private readonly _sidebar: SidebarService,
    private authService: AuthService,
    private router: Router,
){
    
  }
  ngOnInit(): void {

    this._sidebar.getCurrentSidebarState().pipe(
      // distinctUntilChanged(),
      takeUntil(this.unsubscribe$),
      tap(v => {
        v === 'show'? this.isSidebarOpen = true : this.isSidebarOpen = false
      })
    ).subscribe()
  }

  onToggle(){
    this.isExpand = !this.isExpand;
  }

  onBlurButton(){
    setTimeout(()=> {
      this.isExpand = false
    }, 100)
  }

  onLogout(){
    // console.log('cancel 1')
    this.confirmationService.openConfirmationDialog({
      title: 'Log Out',
      message: 'Are you sure you want to log out?',
      confirmButtonText: 'Yes, log me out',
      cancelButtonText: 'Cancel',
      confirmButtonColor: 'red',
      backgroundColor: 'black',
      positionX: 'center'
    });
    // this.confirmationService.onStartLoading();

    this.confirmationService.confirmAction$
    .pipe(
      take(1)
    )
    .subscribe(confirmed => {
      if (confirmed) {
        // Proceed with the delete action
        console.log('logout confirmaed');
        this.authService.logout()
        this.confirmationService.onCloseModal()
        this.router.navigate(['/login']);
      } else {
        console.log('logout cancelled');
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    // this.unsubscribe$.unsubscribe();
  }
}
