import { AfterViewInit, Component, ElementRef, HostListener, OnInit, signal, ViewChild } from '@angular/core';
import { ActivityLogDTO } from './models/activity-log.dto';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ChartComponent, ApexDataLabels, ApexPlotOptions, ApexStroke, ApexYAxis, ApexGrid } from 'ng-apexcharts';
import { SidebarService } from '../../shared/components/features/layout/sidebar/sidebar.service';
import { AccordionAnimation, FadeInOutAnimation, SlideAnimation } from '../../core/const/animation.const';
import { Accordion } from 'flowbite';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  grid: ApexGrid;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    SlideAnimation,
    FadeInOutAnimation,
    AccordionAnimation
  ]
})
export class HomeComponent implements AfterViewInit {

  verticalScroll : number = 0

  constructor(
    private _sidebar: SidebarService,
  ) {
  }
  
  @ViewChild('scrollableDiv', { static: true }) scrollableDiv!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    if (!this.scrollableDiv) {
      console.error('Scrollable div not found!');
      return;
    }
    
    console.log('Scrollable div found:', this.scrollableDiv.nativeElement);
    this.scrollableDiv.nativeElement.addEventListener('scroll', this.onScroll);
  }
  
  onScroll = (event: Event): void => {
    const target = event.target as HTMLElement;
    this.verticalScroll = target.scrollTop;
    console.log('Scroll position:', this.verticalScroll);
    
  }


  
  
}
