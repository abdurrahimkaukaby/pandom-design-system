import { Component, HostListener } from '@angular/core';
import * as Prism from 'prismjs';
import { AccordionAnimation } from '../../../../core/const/animation.const';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-badge-page',
  templateUrl: './badge-page.component.html',
  styleUrl: './badge-page.component.css',
  animations: [
    AccordionAnimation
  ],
})
export class BadgePageComponent {
  isScrolled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  selectedTab : string = 'usage'
  isExpand : boolean = false
  isExpandDefault : boolean = false

  yourCodeDefault: string = `
    <app-badge text="default"></app-badge>
  `;

  yourCodePrimary: string = `
    <app-badge text="primary" color="primary"></app-badge>
  `;

  yourCodeIconBadge: string = `
    <app-badge icon="ph-fill:check-fat" color="success" text="correct"></app-badge>
    <app-badge text="unverified" color="warning" icon="ph-duotone:key"></app-badge>
  `;

  yourCodeStatusBadge: string = `
    <app-badge text="verified" color="success"></app-badge>
    <app-badge text="unverified" color="warning"></app-badge>
    <app-badge text="denied" color="error"></app-badge>
    <app-badge text="need application" color="primary"></app-badge>
    <app-badge text="not applicable"></app-badge>
  `;

  codeHtmlBadge: string = `
    <div 
        [ngClass]="
            color === 'primary'? 'border-blue-100 bg-blue-50 text-blue-600' :
            color === 'success'? 'border-green-100 bg-green-50 text-green-600' :
            color === 'error'? 'border-red-100 bg-red-50 text-red-600' :
            color === 'warning'? 'border-orange-100 bg-orange-50 text-orange-600' : color
            'border-slate-100 bg-slate-50 text-slate-600'"
        class="flex items-center capitalize rounded-md border gap-1 px-1">
        <div *ngIf="icon !== ''" class="flex h-4 w-4 mb-2">
            <mat-icon class="" [svgIcon]="icon"></mat-icon>
        </div>
        {{text}}
    </div>
  `;

  codeTsBadge: string = `
    @Input() text: string = 'Badge';
    @Input() icon: string = '' //ph-duotone:key
    @Input() color: 'neutral' | 'primary' | 'success' | 'error' | 'warning' = 'neutral'
  `;

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    const verticalOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (verticalOffset > 140) {
      this.isScrolled$.next(false);
    } else {
      this.isScrolled$.next(true);
    }
  }

  ngAfterViewInit() {
    Prism.highlightAll();
  }

  onToggle(){
    this.isExpand = !this.isExpand;
  }

  onToggleDefault(){
    this.isExpandDefault = !this.isExpandDefault;
  }

  onSelectedTab(tab:string){
    this.selectedTab = tab
  }
}
