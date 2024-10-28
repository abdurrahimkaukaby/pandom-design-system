import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { masterDataSiteDTO } from './dto/masterdata-site.dto';
import { FormGroupOf } from '../../../../../core/dto/form-group-of.dto';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-masterdata-site-card',
  templateUrl: './masterdata-site-card.component.html',
  styleUrls: ['./masterdata-site-card.component.css'],
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
export class MasterdataSiteCardComponent implements OnInit {
  @Input() site: string = 'Site-01';
  @Input() location: string = 'Location-01';

  @Output() onSaveEvent: EventEmitter<masterDataSiteDTO> = new EventEmitter<masterDataSiteDTO>();

  isExpand : boolean = false

  masterDataSiteForm = new FormGroup<FormGroupOf<masterDataSiteDTO>>({
    site : new FormControl(this.site, Validators.required),
    location : new FormControl(this.location, Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

  onExpand(){
    this.isExpand = true;
  }

  onCancel(){
    this.masterDataSiteForm.setValue({
      site: this.site,
      location: this.location
    })

    this.isExpand = false
  }

  onSave(){
    this.onSaveEvent.emit(this.masterDataSiteForm.getRawValue())
  }

}
