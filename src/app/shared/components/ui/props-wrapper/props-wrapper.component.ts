import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-props-wrapper',
  templateUrl: './props-wrapper.component.html',
  styleUrl: './props-wrapper.component.css'
})
export class PropsWrapperComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() type: string = '';

}
