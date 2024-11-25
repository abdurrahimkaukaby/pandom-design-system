import { Component, HostListener, OnInit, signal, ViewChild } from '@angular/core';
import { ActivityLogDTO } from './models/activity-log.dto';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ChartComponent, ApexDataLabels, ApexPlotOptions, ApexStroke, ApexYAxis, ApexGrid } from 'ng-apexcharts';
import { SidebarService } from '../../shared/components/features/layout/sidebar/sidebar.service';

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
  styleUrl: './home.component.css'
})
export class HomeComponent{

  verticalScroll : number = 0

  constructor(
    private _sidebar: SidebarService,
  ) {
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    this.verticalScroll =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
  }

  
}
