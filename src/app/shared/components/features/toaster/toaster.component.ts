import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ToasterService } from './toaster.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.css',
  animations: [
    trigger('slideIn', [
      state('in', style({ transform: 'translateY(0)' })),
      state('out', style({ transform: 'translateY(-100%)' })),
      transition('out => in', [
        style({ transform: 'translateY(-100%)' }),
        animate('0.5s ease-out')
      ]),
      transition('in => out', [
        animate('0.5s ease-in', style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class ToasterComponent implements OnChanges {
  @Input() icon: 'success' | 'error' | 'warning' | 'info'
  @Input() title: string = 'Action success!';
  @Input() message: string
  @Input() isTrig: boolean = false
  
  trig : boolean = false;

  constructor(private toasterService: ToasterService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['isTrig'] &&
      changes['isTrig']?.previousValue !== changes['isTrig']?.currentValue!
    ) {
      if (this.isTrig){
        setTimeout(() => {
          this.trig = true;
        }, 100)
      }
    }
  }
  
  onCancel() {
    this.toasterService.closeToaster();
  }
}
