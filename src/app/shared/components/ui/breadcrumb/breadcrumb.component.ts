import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SidebarService } from '../../features/layout/sidebar/sidebar.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent implements OnInit {

  isSidebarActive: boolean = true;

  constructor(
    private _sidebar: SidebarService,
    private activatedRoute: ActivatedRoute,
  ) {}
  
  @Input() label: string = this.activatedRoute.snapshot.data['breadcrumb']['label'];
  @Input() parents: {route: string, label:string}[] = this.activatedRoute.snapshot.data['breadcrumb']['parents'] || []
  
  ngOnInit(): void {
    this._sidebar.currentState$.subscribe(v => {
      if (v === 'show') {
        this.isSidebarActive = true;
      } else {
        this.isSidebarActive = false;
      }
    })
  }

  toggleSidebar(): void {
    this._sidebar.toggleSidebar()
  }
}
