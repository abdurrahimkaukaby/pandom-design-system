import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-ring',
  templateUrl: './loading-ring.component.html',
  styleUrl: './loading-ring.component.css'
})
export class LoadingRingComponent {
  @Input() width: string = 'w-4';
}
