import { Component } from '@angular/core';
import { ToasterService } from '../toaster.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-toaster-wrapper',
  templateUrl: './toaster-wrapper.component.html',
  styleUrl: './toaster-wrapper.component.css',
  animations: [
    trigger('slideY', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }), // Initial state: hidden above
        animate('0.4s ease-out', style({ opacity: 1, transform: 'translateY(0)' })), // Slide in to position
      ]),
      transition(':leave', [
        animate('0.4s ease-in', style({ opacity: 0, transform: 'translateY(-40px)' })), // Slide out below
      ]),
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
        animate('0.5s', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('0.5s', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ToasterWrapperComponent {
  showToaster = false;
  title : string
  message : string;
  icon : 'success' | 'error' | 'warning' | 'info' = 'success'

  constructor(private toasterService: ToasterService) {}

  ngOnInit(): void {
    this.toasterService.toasterAction$.subscribe(action => {
      this.showToaster = action;
    });

    this.toasterService.toasterIcon$.subscribe(icon => {
      this.icon = icon;
    });

    this.toasterService.toasterInfo$.subscribe(info => {
      this.title = info.title;
      this.message = info.message;
    });

  }

}
