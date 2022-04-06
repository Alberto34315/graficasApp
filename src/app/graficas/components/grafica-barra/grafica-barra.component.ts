import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [],
})
export class GraficaBarraComponent implements OnInit {
  @Input() horizontal: boolean = false;
  public barChartOptions: ChartConfiguration['options'] = {
    indexAxis: 'x',
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };
  public barChartType: ChartType = 'bar';
  @Input() barChartData: ChartData<'bar'> = {
    /*labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],*/
    datasets: [],
  };
  constructor() {}

  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartOptions={...this.barChartOptions,indexAxis:'y'}
    }
  }

  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
  }
}
