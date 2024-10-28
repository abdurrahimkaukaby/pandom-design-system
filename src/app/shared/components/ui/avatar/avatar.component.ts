import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css'
})
export class AvatarComponent {
  @Input() title: string = 'S';
  @Input() mode: 'normal' | 'compact' | 'none' = 'normal';
  @Input() textSize: 'xxs' | 'xs' | 'sm' = 'sm';

}
