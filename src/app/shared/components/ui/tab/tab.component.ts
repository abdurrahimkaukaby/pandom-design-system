import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css'
})
export class TabComponent implements OnChanges {
  @Input() tabs: string[];
  @Input() selectedTab: string;

  @Output() onSelectTabEmit: EventEmitter<string> = new EventEmitter<string>();


  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['selectedTab'] &&
      changes['selectedTab']?.previousValue !== changes['selectedTab']?.currentValue!
    ) {}
  }

  onSelectTab(tab: string){
    this.onSelectTabEmit.emit(tab)
  }

}
