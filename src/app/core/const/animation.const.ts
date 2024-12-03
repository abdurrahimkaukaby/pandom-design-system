import { trigger, transition, style, animate } from "@angular/animations"

export const SlideAnimation = 
trigger('slide', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('0.2s', style({ opacity: 1  })),
    ]),
    transition(':leave', [animate('0.2s', style({ opacity: 0, height: 0 }))]),
  ])

export const AccordionAnimation = 
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
  ])

export const FadeInOutAnimation = 
  trigger('fadeInOut', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('0.3s', style({ opacity: 1 })),
    ]),
    transition(':leave', [
      animate('0.3s', style({ opacity: 0 }))
    ]),
  ])