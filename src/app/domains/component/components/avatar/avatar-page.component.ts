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
