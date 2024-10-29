import { AfterViewInit, Component } from '@angular/core';
import { AccordionAnimation } from '../../../../core/const/animation.const';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-avatar-page',
  templateUrl: './avatar-page.component.html',
  styleUrl: './avatar-page.component.css',
  animations: [
    AccordionAnimation
  ],
})
export class AvatarPageComponent implements AfterViewInit {
  selectedTab : string = 'usage'
  isExpand : boolean = false
  isExpandDefault : boolean = false
  isExpandIcon : boolean = false
  isExpandImage : boolean = false

  yourCode: string = `
    <app-avatar title="H" mode="normal"></app-avatar>
    <app-avatar title="H" mode="compact"></app-avatar>
    <app-avatar title="H" mode="compact" textSize="xxs"></app-avatar>
  `;

  yourCodeIcon: string = `
    <app-avatar color="error" title="H" mode="normal" icon="ph-regular:codepen-logo"></app-avatar>
    <app-avatar color="warning" title="H" mode="compact" textSize="xs" icon="ph-regular:codepen-logo"></app-avatar>
    <app-avatar color="success" title="H" mode="compact" textSize="xxs" icon="ph-regular:codepen-logo"></app-avatar>
  `;

  yourCodeImage: string = `
    <app-avatar title="H" mode="normal" rounded="full" image="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"></app-avatar>
    <app-avatar title="H" mode="compact" rounded="full" image="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"></app-avatar>
  `;

  codeHtmlAvatar: string = `
    <div 
      [ngClass]="{'h-[35px] w-[35px]' : mode === 'normal',
                  'h-[22px] w-[22px]' : mode === 'compact',
                  'text-[10px]' : textSize === 'xxs',
                  'text-xs' : textSize === 'xs',
                  'text-sm' : textSize === 'sm',
                  'bg-etma-blue-500' : color === 'primary',
                  'bg-etma-red-500' : color === 'error',
                  'bg-etma-warning-500' : color === 'warning',
                  'bg-etma-success-500' : color === 'success',
                  'rounded-[4px]' : rounded === 'edge',
                  'rounded-full' : rounded === 'full',

                  }"
      class="flex items-center justify-center text-white uppercase">
      {{icon === '' && image === ''? title : ''}}
      <div 
        *ngIf="icon !== ''" 
        [ngClass]="{
            'h-6 w-6' : textSize === 'sm',
            'h-4 w-4 mb-2' : textSize === 'xs',
            'h-3 w-3 mb-3' : textSize === 'xxs',
        }" 
        class="flex text-white">
        <mat-icon class="" [svgIcon]="icon"></mat-icon>
      </div>
      <img 
        *ngIf="image !== '' && icon === ''"
        [ngClass]="{
            'rounded-[4px]' : rounded === 'edge',
            'rounded-full' : rounded === 'full',
        }"
        class="flex h-full" 
        [src]="image"
        alt=""
      >
    </div>
  `;

  codeTsAvatar: string = `
    @Component({
      standalone : true,
      selector: 'app-avatar',
      templateUrl: './avatar.component.html',
      styleUrl: './avatar.component.css'
    })
    export class AvatarComponent {
      @Input() title: string = 'S';
      @Input() icon: string = '';
      @Input() image: string = '';
      @Input() rounded: 'full' | 'edge' = 'edge';
      @Input() color: 'primary' | 'error' | 'success' | 'warning' = 'primary';
      @Input() mode: 'normal' | 'compact' | 'none' = 'normal';
      @Input() textSize: 'xxs' | 'xs' | 'sm' = 'sm';


    }
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

  onToggleIcon(){
    this.isExpandIcon = !this.isExpandIcon;
  }

  onToggleImage(){
    this.isExpandImage = !this.isExpandImage;
  }

  onBlurButton(){
    setTimeout(()=> {
      this.isExpand = false
    }, 100)
  }

  onSelectedTab(tab:string){
    this.selectedTab = tab
  }
}
