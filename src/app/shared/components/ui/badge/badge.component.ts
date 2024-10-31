import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {
  @Input() text: string = 'Badge';
  @Input() icon: string = '' //ph-duotone:key
  @Input() color: 'neutral' | 'primary' | 'success' | 'error' | 'warning' = 'neutral'

  constructor() { }

  ngOnInit(): void {
  }

}
