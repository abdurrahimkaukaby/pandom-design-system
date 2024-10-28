import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type ShowHideType = 'show' | 'hide';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  sidebarState: ShowHideType = 'show';
  public siteData$ = new BehaviorSubject<any[]>([]);
  public sidebarState$ = new BehaviorSubject<ShowHideType>('show');
  public isMasterData$ = new BehaviorSubject<boolean>(false);
  public subMasterData$ = new BehaviorSubject<string>('Sites');
  public currentState$ = this.sidebarState$.asObservable();

  constructor(
  ) {}
  
  getSites() {
    return this.siteData$.asObservable();
  }

  setSites(sites : any[]) {
    return this.siteData$.next(sites);
  }

  getCurrentSidebarState() {
    return this.sidebarState$.asObservable();
  }

  setSubMasterData(sub: string){
    this.subMasterData$.next(sub)
  }

  resetSubMasterData(){
    this.subMasterData$.next('Sites')
  }

  getSubMasterData(){
    return this.subMasterData$.asObservable();
  }

  onSetMasterData(status: boolean){
    this.isMasterData$.next(status)
  }

  getIsMasterData(){
    return this.isMasterData$.asObservable();
  }


  showSidebar(): void {
    this.sidebarState$.next('show');
  }

  hideSidebar(): void {
    this.sidebarState$.next('hide');
  }

  toggleSidebar(): void {
    this.sidebarState$.getValue() === 'show' ? this.hideSidebar() : this.showSidebar();
  }
}
