import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from './sidebar/sidebar.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  isExtend: boolean = true;
  isMasterData: boolean;

  constructor(
    private _sidebar: SidebarService,
    public router: Router,
  ){}

  ngOnInit(): void {
    this._sidebar.getIsMasterData()
      .pipe(
        tap(v => {
          this.isMasterData = v
        })
      ).subscribe()
  }
  
  setMargin(extend:boolean){
    this.isExtend = extend
  }
}
