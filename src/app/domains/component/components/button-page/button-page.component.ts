import { Component, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as Prism from 'prismjs';
import { AccordionAnimation } from '../../../../core/const/animation.const';

@Component({
  selector: 'app-button-page',
  templateUrl: './button-page.component.html',
  styleUrl: './button-page.component.css',
  animations: [
    AccordionAnimation
  ],
})
export class ButtonPageComponent {
  isScrolled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  selectedTab : string = 'usage'

  yourCode: string = `
    <app-button>Primary button</app-button>
    <app-button [disableTerm]="true">Primary button</app-button>
    <app-button mode="compact">Primary button</app-button>
    <app-button [disableTerm]="true" mode="compact">Primary button</app-button>
  `;

  yourCodeSecondary: string = `
    <app-button color="secondary" >Secondary button</app-button>
    <app-button color="secondary" [disableTerm]="true">Secondary button</app-button>
    <app-button color="secondary" mode="compact">Secondary button</app-button>
    <app-button color="secondary" [disableTerm]="true" mode="compact">Secondary button</app-button>
  `;

  yourCodeDanger: string = `
    <app-button color="danger" >Danger button</app-button>
    <app-button color="danger" [disableTerm]="true">Danger button</app-button>
    <app-button color="danger" mode="compact">Danger button</app-button>
    <app-button color="danger" [disableTerm]="true" mode="compact">Danger button</app-button>
  `;

  yourCodeWarning: string = `
    <app-button color="warning" >Warning button</app-button>
    <app-button color="warning" [disableTerm]="true">Warning button</app-button>
    <app-button color="warning" mode="compact">Warning button</app-button>
    <app-button color="warning" [disableTerm]="true" mode="compact">Warning button</app-button>
  `;

  yourCodeGhost: string = `
    <app-button color="ghost" >Ghost button</app-button>
    <app-button color="ghost" [disableTerm]="true">Ghost button</app-button>
    <app-button color="ghost" mode="compact">Ghost button</app-button>
    <app-button color="ghost" [disableTerm]="true" mode="compact">Ghost button</app-button>
  `;

  yourCodeIconBefore: string = `
    <app-button iconLeft="ph-regular:swap">Icon before</app-button>
    <app-button iconLeft="ph-regular:swap" [disableTerm]="true">Icon before</app-button>
    <app-button iconLeft="ph-regular:swap" mode="compact">Icon before</app-button>
    <app-button iconLeft="ph-regular:swap" [disableTerm]="true" mode="compact">Icon before</app-button>
  `;

  yourCodeIconAfter: string = `
    <app-button color="warning" iconRight="ph-fill:eraser">Icon after</app-button>
    <app-button color="warning" iconRight="ph-fill:eraser" [disableTerm]="true">Icon after</app-button>
    <app-button color="warning" iconRight="ph-fill:eraser" mode="compact">Icon after</app-button>
    <app-button color="warning" iconRight="ph-fill:eraser" [disableTerm]="true" mode="compact">Icon after</app-button>
  `;

  yourCodeIcon: string = `
    <app-button color="primary" iconRight="ph-fill:eraser"></app-button>
    <app-button color="primary" iconRight="ph-fill:eraser" [disableTerm]="true"></app-button>
    <app-button color="warning" iconRight="ph-fill:eraser"></app-button>
    <app-button color="warning" iconRight="ph-fill:eraser" [disableTerm]="true"></app-button>
    <app-button color="danger" iconRight="ph-fill:eraser" mode="compact"></app-button>
    <app-button color="danger" iconRight="ph-fill:eraser" [disableTerm]="true" mode="compact"></app-button>
    <app-button color="secondary" iconRight="ph-fill:eraser" mode="compact"></app-button>
    <app-button color="secondary" iconRight="ph-fill:eraser" [disableTerm]="true" mode="compact"></app-button>
  `;

  codeHtmlButton: string = `
  <button 
      (blur)="onBlur()"
      [disabled]="disableTerm"
      [ngClass]="{
          'bg-blue-600 active:bg-blue-900 text-white hover:bg-blue-800 focus:ring-2 focus:ring-[#B9E1FE] disabled:opacity-75' : color === 'primary',
          'bg-[#ffffff] active:bg-[#d3d3d6] text-[#303036] hover:bg-[#E4E4E7] focus:ring-2 focus:ring-[#B9E1FE] focus:bg-[#e5e5e5] disabled:text-[#D6D6DB] border-[1px] border-[#E4E4E7]' : color === 'secondary',
          'bg-white active:bg-[#e0e0e0] text-slate-600 hover:bg-[#F4F4F5] focus:ring-2 focus:ring-[#B9E1FE] focus:bg-[#e5e5e5] disabled:text-[#D6D6DB]' : color === 'ghost',
          'bg-red-500 active:bg-red-700 hover:bg-red-600 focus:ring-2 text-etma-neutral-50 disabled:bg-[#F4F4F5] disabled:text-[#D6D6DB]' : color === 'danger',
          'bg-yellow-400 active:bg-yellow-600 hover:bg-yellow-500 focus:ring-2 text-neutral-900 disabled:opacity-75' : color === 'warning',
          'px-6 py-2 rounded-[6px] text-sm h-8' : mode === 'wide' ,
          'px-3 py-2 rounded-md text-sm h-8' : mode === 'normal' ,
          'px-2 py-1 text-xs rounded-[4px]' : mode === 'compact',
      }"
      class="flex gap-[6px] justify-center disabled:pointer-events-none items-center shadow-sm focus:outline-none duration-150"
  >
      <div 
          *ngIf="iconLeft"
          [ngClass]="{
              'h-4 w-4' : mode === 'normal' || mode === 'wide',
              'h-[14px] w-[14px]' : mode === 'compact',
              'text-neutral-600' : color === 'secondary',
          }"
          class="flex items-center">
          <mat-icon [svgIcon]="iconLeft"></mat-icon>
      </div> 
          <ng-content></ng-content>

      <div 
          *ngIf="iconRight"
          [ngClass]="{
              'h-4 w-4' : mode === 'normal' || mode === 'wide',
              'h-[14px] w-[14px]' : mode === 'compact'
          }"
          class="flex items-center">
          <mat-icon [svgIcon]="iconRight"></mat-icon>
      </div> 
  </button>
  `;

  codeTsButton: string = `
    @Component({
      standalone : true,
      selector: 'app-button',
      templateUrl: './button.component.html',
      styleUrl: './button.component.css'
    })
    export class ButtonComponent implements OnInit {
      @Input() disableTerm: boolean = false;
      @Input() iconRight: string
      @Input() iconLeft: string
      @Input() mode: 'normal' | 'compact' | 'wide' = 'normal'
      @Input() color: 'primary' | 'secondary' | 'ghost' | 'danger' | 'warning' = 'primary';

      @Output() onBlurEmit = new EventEmitter<void>();

      constructor() { }

      ngOnInit(): void {
      }

      onBlur(){
        this.onBlurEmit.emit()
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
