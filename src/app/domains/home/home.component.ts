import { Component, signal, ViewChild } from '@angular/core';
import { ActivityLogDTO } from './models/activity-log.dto';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ChartComponent, ApexDataLabels, ApexPlotOptions, ApexStroke, ApexYAxis, ApexGrid } from 'ng-apexcharts';

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
export class HomeComponent {

  @ViewChild("chart") chart: ChartComponent
  public chartOptions: Partial<ChartOptions>

  chartCategory = signal('mechanical')
  categories = ['mechanical', 'electrical', 'instrument']

  constructor() {
    this.chartOptions = {
      grid: {
        strokeDashArray: 2,
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      series: [
        {
          name: "Running Hour",
          data: [2, 124, 150],
          color: '#D5E472'
        },
        {
          name: "Sch DT",
          data: [2, 32, 2],
          color: '#ADC32B'
        },
        {
          name: "Unsch DT",
          data: [600, 500, 400],
          color: '#61711A'
        }
      ],
      chart: {
        type: "bar",
        height: 488
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: false,
        offsetX: -12,
        style: {
          fontSize: "12px",
          colors: ["#fff"]
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: ['ELMOT LIQUID TRANSFER B', 'AIR DRYER A', 'ENGINE HYDRANT PUMP A']
      },
    };
  }

  activityLogs : ActivityLogDTO[] = [
    {
      personalName: 'Nandha',
      action: 'updated',
      data: 'running hour',
      equipment: 'Gas Compressor A',
      createdAt: ''
    },
    {
      personalName: 'Dimas',
      action: 'updated',
      data: 'running hour',
      equipment: 'Elmot Liquid Transfer Pump B',
      createdAt: ''
    },
    {
      personalName: 'Dimas',
      action: 'updated',
      data: 'running hour',
      equipment: 'Utility Water Pump B',
      createdAt: ''
    },
    {
      personalName: 'Rizky Julian',
      action: 'updated',
      data: 'running hour',
      equipment: 'Jocky Pump',
      createdAt: ''
    },
    {
      personalName: 'Nandha',
      action: 'edited',
      data: 'specification',
      equipment: 'Air Dryer B',
      createdAt: ''
    },
    {
      personalName: 'Nandha',
      action: 'created',
      data: 'specification',
      equipment: 'Gas Engine Generator C',
      createdAt: ''
    },
  ]  

  onChangeCategory(category: string){
    this.chartCategory.set(category)

    this.chartOptions = {
      series: [
        {
          name: "Running Hour",
          data: [2, 124, 150],
          color: this.chartCategory() === 'mechanical'? '#D5E472' : this.chartCategory() === 'electrical'? '#B9E1FE' : '#FFDFE2'
        },
        {
          name: "Sch DT",
          data: [2, 32, 2],
          color: this.chartCategory() === 'mechanical'? '#ADC32B' : this.chartCategory() === 'electrical'? '#0C96EB' : '#FF3447'
        },
        {
          name: "Unsch DT",
          data: [600, 500, 400],
          color: this.chartCategory() === 'mechanical'? '#61711A' : this.chartCategory() === 'electrical'? '#015DA3' : '#C70E20'
        }
      ],
      chart: {
        type: "bar",
        height: 488
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: false,
        offsetX: -12,
        style: {
          fontSize: "12px",
          colors: ["#fff"]
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: ['ELMOT LIQUID TRANSFER B', 'AIR DRYER A', 'ENGINE HYDRANT PUMP A']
      }
    };
  }

}
