import { AfterViewInit, Component, ElementRef, HostListener, OnInit, signal, ViewChild } from '@angular/core';
import { ActivityLogDTO } from './models/activity-log.dto';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ChartComponent, ApexDataLabels, ApexPlotOptions, ApexStroke, ApexYAxis, ApexGrid } from 'ng-apexcharts';
import { SidebarService } from '../../shared/components/features/layout/sidebar/sidebar.service';
import { AccordionAnimation, FadeInOutAnimation, SlideAnimation } from '../../core/const/animation.const';
import { stepperDataDTO } from '../../shared/components/ui/stepper/stepper.component';

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
    AccordionAnimation,
    FadeInOutAnimation,
    SlideAnimation
  ],
})
export class HomeComponent implements AfterViewInit {

  verticalScroll : number = 0

  activeStepIndex : number = 0;
  stepperData : stepperDataDTO[] = [
    {
      title: 'First step',
      isCompleted: false,
      isDisable: false
    },
    {
      title: 'Second step',
      isCompleted: false,
      isDisable: false
    },
    {
      title: 'Third step',
      isCompleted: false,
      isDisable: false
    },
  ]

  selectedTabChildren : string = 'First tab'
  onSelectedTabChildren(tab:string){
    this.selectedTabChildren = tab
  }

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
