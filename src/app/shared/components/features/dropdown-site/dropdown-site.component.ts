import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Inject, Input, OnDestroy, OnInit, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError, distinctUntilChanged, EMPTY, Subject, takeUntil, tap } from 'rxjs';
import { SiteDTO } from '../../../../api/master-data/models/site.dto';
import IManageSites, { ManageSitesApi } from '../../../../api/master-data/ports/i-manage-sites';
import { LocalServiceConst } from '../../../../core/const/local-storage.const';
import { SearchPaginationDTO } from '../../../../core/dto/pagination.dto';
import { LocalstorageService } from '../../../../core/services/localstorage.service';
import { ToasterService } from '../toaster/toaster.service';
import { SidebarService } from '../layout/sidebar/sidebar.service';

interface siteDTO {site:string, location:string}
@Component({
  selector: 'app-dropdown-site',
  templateUrl: './dropdown-site.component.html',
  styleUrl: './dropdown-site.component.css',
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
export class DropdownSiteComponent implements OnInit, OnDestroy {
  @Input() sites: siteDTO[] = [{site : 'Site-01', location: 'Location-01'},{site : 'Site-02', location: 'Location-02'},{site : 'Site-03', location: 'Location-03'},{site : 'Site-04', location: 'Location-04'},{site : 'Site-05', location: 'Location-05'},{site : 'Site-06', location: 'Location-06'}]
  @Input() isSidebarActive : boolean
  private readonly _onDestroy$: Subject<void> = new Subject();

  searchForm = new FormControl('')
  isSearchFocus : boolean
  isExpand : boolean = false
  sitesData = signal<SiteDTO[]>([])
  selectedSitesData = signal<SiteDTO>(null)

  constructor(
    @Inject(ManageSitesApi) private _sitesManager: IManageSites,
    private toasterService: ToasterService,
    private localStorageService: LocalstorageService,
    private sidebarService: SidebarService,
  ){
    this.searchForm.valueChanges
      .pipe(
        distinctUntilChanged(),
        takeUntil(this._onDestroy$),
        tap(value => {
          this.fetchSite()
        })
      ).subscribe()
  }

  ngOnInit(): void {
    this.fetchSite()

    // Subscribe to changes in the site key
    this.localStorageService.getDataObservable(LocalServiceConst.SITE_INFO)
    .subscribe((data: string | null) => {
    // console.log('data selected site => ', data)
      if (data){
        this.selectedSitesData.set(JSON?.parse(data));
      }
    });
  }

  fetchSite(){
    const search : SearchPaginationDTO = {
      searchTerm: this.searchForm.value
    }
    this._sitesManager.getSites(search)
      .pipe(
        catchError((err) => {
          this.toasterService.error('Failed to get Sites data.', 3000);
          return EMPTY
        }),
        tap(siteResult => {
          this.sitesData.set(siteResult?.data?.list)
          // save sites data to service so it can be called by others components
          this.sidebarService.setSites(this.sitesData())
        })
      ).subscribe()
  }

  onToggle(){
    this.isExpand = !this.isExpand;
  }

  onBlurSite(){
      setTimeout(() =>{
        if(!this.isSearchFocus){
          setTimeout(() =>{
            this.isExpand = false
          },150)
        }
      },50)
    }

  onSetSearchFocus(event : boolean){
    this.isSearchFocus = event;
    if(!this.isSearchFocus){
      setTimeout(() =>{
        this.isExpand = false
      },100)
    }
  }

  onSelectSite(site : SiteDTO){
    this.localStorageService.saveData(LocalServiceConst.SITE_INFO, JSON.stringify(site))
    this.isExpand = false;
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }
}
