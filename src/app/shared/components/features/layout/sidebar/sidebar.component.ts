import { AfterViewChecked, Component, EventEmitter, Inject, Output, signal } from '@angular/core';
import { ShowHideType, SidebarService } from './sidebar.service';
import { BehaviorSubject, catchError, EMPTY, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarChildrenGroupMenu } from './interfaces/sidebar.interface';
import { LocalStorageServiceInterface } from '../../../../../core/interfaces/localstorage.service.interface';
import { environment } from '../../../../../environments/environment';
import { LocalstorageService } from '../../../../../core/services/localstorage.service';
import { Location } from '@angular/common';
import { ToasterService } from '../../toaster/toaster.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
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
export class SidebarComponent implements AfterViewChecked {

  _sidebarMenu = [
    {
      route: 'component/avatar',
      icon: 'ph-duotone:file-text',
      name: 'Avatar',
    },
    {
      route: 'component/badge',
      icon: 'ph-duotone:pulse',
      name: 'Badge'
    },
    {
      route: 'component/breadcrumb',
      icon: 'ph-duotone:clock-countdown',
      name: 'Breadcrumb'
    },
    {
      route: 'component/button',
      icon: 'ph-duotone:clock-counter-clockwise',
      name: 'Buttons'
    },
    {
      route: 'component/card',
      icon: 'ph-duotone:wrench',
      name: 'Card'
    },
    {
      route: 'component/date-picker',
      icon: 'ph-duotone:gauge',
      name: 'Date Picker'
    },
    {
      route: 'component/dropdown',
      icon: 'ph-duotone:gauge',
      name: 'Dropdown'
    },
    {
      route: 'component/input',
      icon: 'ph-duotone:gauge',
      name: 'Input'
    },
    {
      route: 'component/stepper',
      icon: 'ph-duotone:gauge',
      name: 'Stepper'
    },
    {
      route: 'component/tab',
      icon: 'ph-duotone:gauge',
      name: 'Tab'
    },
  ]

  _settingMenu = [
    {
      route: 'master-data',
      icon: 'ph-duotone:folders',
      name: 'About Pandom',
    },
  ]
  
  @Output() extendSidebar = new EventEmitter();
  public sidebarState$ = new BehaviorSubject<ShowHideType>('hide');
  public subMenuTitle$ = new BehaviorSubject<string>('');

  localStorageService: LocalStorageServiceInterface;

  public subMenu!: SidebarChildrenGroupMenu[];
  public activeBasePath: string = '';
  currentRoute: string = ''

  isSidebarActive: boolean = true;
  isMenuActive: boolean = true;
  isHomeActive: boolean = true;
  isHomeActiveFirst: number = 0;
  version = environment.version
  isMasterData : boolean = false;
  selectedSubMasterData : string;
  subMasterDataSelect : string[] = ['Sites', 'Equipment sub-category', 'Equipment brand & type', 'Maintenance type', 'Classification system']
  sitesData = signal<any[]>([])

  routeActive : string

  constructor(
    private _sidebar: SidebarService,
    private readonly router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
  ) {
    this.localStorageService = new LocalstorageService();
    console.log('%c CREATORS:', 'font-weight: bold; font-size: 72px;color: #A6C5ED; text-shadow: 3px 3px 0 rgb(42,21,113) , 6px 6px 0 rgb(5,148,68) ')
    console.log('%c  @abdurrahimhilmy', 'font-weight: bold; font-size: 46px;color: #A6C5ED; text-shadow: 3px 3px 0 rgb(42,21,113) , 6px 6px 0 rgb(5,148,68) ')
  }

  ngOnInit(): void {

    // this.getRoleFromLocalStorage();
    // this.getUserInfo();

    // const _tempObject = this.localStorageService.getData('USER_INFO').toObject<PersonalInformation>();

    // this.userInfo = _tempObject;
  
    this._sidebar.getSubMasterData()
      .pipe(
        tap(v => {
          this.selectedSubMasterData = v
        })
      ).subscribe()
    
    this._sidebar.getIsMasterData()
      .pipe(
        tap(v => {
          this.isMasterData = v
        })
      ).subscribe()

  }

  ngAfterViewChecked(): void {
    // this.routeActive = this.activatedRoute.snapshot.data['breadcrumb']['label']
    if(this.currentRoute !== this.router.url){
      
      if(this.getBaseUrl(this.router.url)?.includes('home')){
        console.log('troute => ', this.getBaseUrl(this.router.url));
        
        this.toggleSidebar();
      }
    }
    this.currentRoute = this.router.url
  }

  onActiveMasterDataCheck(event){
    this._sidebar.onSetMasterData(event)
    if(this.isMasterData){
      this._sidebar.resetSubMasterData();
      this.extendSidebar.emit(true)
      this._sidebar.showSidebar();
    }
  }

  goBackFromMasterDataOrHome() {
    this._sidebar.onSetMasterData(false);
    this._sidebar.showSidebar();
    this.extendSidebar.emit(true);

    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/home']);
    }
  }

  isHomeActiveCheck(event){
    console.log('asduioh', event)
    this.isHomeActive = event
    if (this.isHomeActiveFirst === 0){
      this.isHomeActiveFirst = 1
    }
  }

  isNotHomeActiveCheck(event){
    if(this.isHomeActiveFirst === 0){
      this.isHomeActive = false
    }
  }

  // getRoleFromLocalStorage(): void {
  //   const _role: any = { ...this.localStorageService.getData(LocalServiceConst.ROLE) };
  //   this.role = _role._result.toUpperCase();
  // }

  // getUserInfo() {
  //     const _userInfo: any = { ...this.localStorageService.getData(LocalServiceConst.USER_INFO) };
  //     this.userInfo = JSON.parse(_userInfo._result);
  // }

  toggleSidebar(): void {
    this._sidebar.toggleSidebar();
    this._sidebar.currentState$.subscribe(v => {
      if (v === 'show') {
        this.isSidebarActive = true;
        this.extendSidebar.emit(true);
        setTimeout(() => {
          this.isMenuActive = true;
        }, 100)
      } else {
        this.isSidebarActive = false;
        this.extendSidebar.emit(false)
        this.isMenuActive = false;
      }
    })

  }

  capitalize(input: string, nextIndex: number): string {
    const _first = input.substring(1, input?.length).charAt(0).toUpperCase();
    return `${_first}${input.slice(nextIndex)}`;
  }

  getSidebar(): SidebarService {
    return this._sidebar;
  }

  onMasterData(){
    this.isMasterData = true;
    console.log('master data on');
  }

  onSelectSubMasterData(subMasterData : string){
    this._sidebar.setSubMasterData(subMasterData)
  }

  getBaseUrl(url: string): string {
    return url? url?.substring(1, url.length) : ''
  }

}
