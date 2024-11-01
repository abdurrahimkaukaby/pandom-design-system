import { AfterViewInit, Component, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as Prism from 'prismjs';
import { AccordionAnimation } from '../../../../core/const/animation.const';

@Component({
  selector: 'app-breadcrumb-page',
  templateUrl: './breadcrumb-page.component.html',
  styleUrl: './breadcrumb-page.component.css',
  animations: [
    AccordionAnimation
  ],
})
export class BreadcrumbPageComponent implements AfterViewInit {
  isScrolled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  selectedTab : string = 'usage'

  yourCode: string = `
    <app-breadcrumb label="Home" icon="ph-duotone:house-line"></app-breadcrumb>
  `;

  yourCodeParent: string = `
    <app-breadcrumb [parents]="[{route:'Parent page', label:'Parent page'}]" label="Children page" icon="ph-duotone:users"></app-breadcrumb>
    <app-breadcrumb [parents]="[{route:'Parent page', label:'Parent page'},{route:'Other parent page', label:'Other parent page'}]" label="Children page" icon="ph-duotone:puzzle-piece"></app-breadcrumb>
  `;

  yourCodeLongBreadcrumb: string = `
    <app-breadcrumb 
      [parents]="[
          {route:'Parent page', label:'Parent page'},
          {route:'Parent page', label:'Parent page'},
          {route:'Parent page', label:'Parent page'},
          {route:'Parent page', label:'Parent page'},
          {route:'Parent page', label:'Parent page'},
          {route:'Parent page', label:'Parent page'},
          {route:'Parent page', label:'Parent page'},
          {route:'Parent page', label:'Parent page'},
          {route:'Parent page', label:'Parent page'},
      ]" 
      label="Children page" 
      icon="ph-duotone:users">
    </app-breadcrumb>
  `;

  codeHtmlBreadcrumb: string = `
    <div class="grid">
        <div class="flex gap-2 ">
            <a [routerLink]="routeIcon">
                <div 
                    class="flex h-4 w-4 -top-1 ">
                    <mat-icon
                        class="text-neutral-600" 
                        [svgIcon]="
                            icon !== ''? icon :
                            label === 'Home'? 'ph-duotone:house-line' : 
                            label === 'Avatar Component' ? 'ph-duotone:puzzle-piece' :
                            label === 'About Pandom' ? 'ph-duotone:users' : 'ph-duotone:puzzle-piece'
                        ">
                    </mat-icon>
                </div>
            </a>
            <div *ngFor="let parent of parents?.length < 9? parents : []; index as indexParent" class="flex flex-row items-center place-content-center">
                <a *ngIf="(parents?.length <= 8 && indexParent > 0) || parents?.length > 8 && indexParent === 0" [routerLink]="parent.route">
                    <h1 class="text-sm mt-[3px] text-neutral-400 font-normal mr-1 hover:text-blue-600 hover:underline duration-150">{{parent?.label}}</h1>
                </a>
                <span *ngIf="(parents?.length <= 8 && indexParent > 0) || parents?.length > 8 && indexParent === 0" class="px-1 text-neutral-400">/</span>
                <span *ngIf="parents?.length > 8 && indexParent === parents?.length" class="px-1 text-neutral-400">...</span>
                <a *ngIf="parents?.length > 8 && indexParent === parents?.length" [routerLink]="parent.route">
                    <h1 class="text-sm mt-[3px] text-neutral-400 font-normal mr-1 hover:text-blue-600 hover:underline duration-150">{{parent?.label}}</h1>
                </a>
                <span *ngIf="parents?.length > 8 && indexParent === parents?.length" class="px-1 text-neutral-400">/</span>

            </div>
            <div *ngIf="parents?.length > 8" class="flex flex-row items-center place-content-center">
                <a [routerLink]="parents[0].route">
                    <h1 class="text-sm mt-[3px] text-neutral-400 font-normal mr-1 hover:text-blue-600 hover:underline duration-150">{{parents[0].label}}</h1>
                </a>
                <span class="px-1 text-neutral-400">/</span>
                <span class="px-1 text-neutral-400">...</span>
                <span class="px-1 text-neutral-400">/</span>
            </div>
            <div>
                <h1 
                    [ngClass]="{
                        'text-[#333333]' : parents.length > 0,
                        'text-neutral-400' : parents.length === 0,
                    }"
                    class="text-sm font-normal mt-[3px]">{{label}}
                </h1>
            </div>
        </div>
    </div>
  `;

  codeTsBreadcrumb: string = `
    @Component({
      standalone : true,
      selector: 'app-breadcrumb',
      templateUrl: './breadcrumb.component.html',
      styleUrl: './breadcrumb.component.css'
    })
    export class BreadcrumbComponent {
      @Input() label: string = this.activatedRoute.snapshot.data['breadcrumb']['label'];
      @Input() icon: string = ''
      @Input() routeIcon: string = '/home'
      @Input() parents: {route: string, label:string}[] = this.activatedRoute.snapshot.data['breadcrumb']['parents'] || []
    }
  `;
  
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    const verticalOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (verticalOffset > 240) {
      this.isScrolled$.next(false);
    } else {
      this.isScrolled$.next(true);
    }
  }
  
  ngAfterViewInit() {
    Prism.highlightAll();
  }

  onSelectedTab(tab:string){
    this.selectedTab = tab
  }
}
