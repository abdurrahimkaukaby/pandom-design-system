import { Component, Input } from '@angular/core';

@Component({
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
