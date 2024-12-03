import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-card',
  templateUrl: './component-card.component.html',
  styleUrl: './component-card.component.css'
})
export class ComponentCardComponent {
  @Input() title: string = '';

}
