import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-no-data-illu',
  templateUrl: './no-data-illu.component.html',
  styleUrl: './no-data-illu.component.css'
})
export class NoDataIlluComponent {
  @Input() title: string = 'No data found.';
  @Input() subtitle: string = 'Please check the wording of the search term.';

}
