import { Component } from '@angular/core';
import * as Prism from 'prismjs';
import { AccordionAnimation } from '../../../../core/const/animation.const';

@Component({
  selector: 'app-badge-page',
  templateUrl: './badge-page.component.html',
  styleUrl: './badge-page.component.css',
  animations: [
    AccordionAnimation
  ],
})
export class BadgePageComponent {
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
            color === 'primary'? 'border-border-border-brand-subtle bg-background-background-brand-accent text-text-text-brand-blue' : 
            color === 'success'? 'border-etma-success-100 bg-etma-success-50 text-etma-success-600' :
            color === 'error'? 'border-etma-danger-100 bg-etma-danger-50 text-etma-danger-600' :
            color === 'warning'? 'border-etma-warning-100 bg-etma-warning-50 text-etma-warning-600' :
            'border-etma-neutral-100 bg-etma-neutral-50 text-etma-neutral-600'"
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
