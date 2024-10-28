import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-index-card',
  templateUrl: './site-index-card.component.html',
  styleUrls: ['./site-index-card.component.css']
})
export class SiteIndexCardComponent implements OnInit {
  @Input() site: string = 'Site-01';
  @Input() location: string = 'Location-01';

  isCordinateShowed : boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  onToggleCordinate(event: MouseEvent){
    event.stopPropagation();
    this.isCordinateShowed = !this.isCordinateShowed
  }

}
