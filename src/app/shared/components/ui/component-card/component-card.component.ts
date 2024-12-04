import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../../features/layout/sidebar/sidebar.service';

@Component({
  selector: 'app-component-card',
  templateUrl: './component-card.component.html',
  styleUrl: './component-card.component.css'
})
export class ComponentCardComponent {
  @Input() title: string = '';

  constructor(
    private _sidebar: SidebarService,
    private router: Router,
  ){}
  
  goToComponentPage(){
    this.router.navigate([`/component/${this.title.toLowerCase()}`]);
    this._sidebar.showSidebar()
  }
}
