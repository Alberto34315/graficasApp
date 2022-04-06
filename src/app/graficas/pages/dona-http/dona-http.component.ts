import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    // labels: this.doughnutChartLabels,
    datasets: [
      // { data: [350, 450, 100], backgroundColor: ["#E6992E", "#99FC26", "#5C8FF5"], hoverBackgroundColor: 'red' },
      //  { data: [ 50, 150, 120 ] },
      // { data: [ 250, 130, 70 ] }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {
    // this.graficasService.getUsuarioRedesSociale().subscribe(data => {
    //   const labels = Object.keys(data)
    //   const values = Object.values(data)
    //   this.doughnutChartLabels = labels;
    //   this.doughnutChartData = {
    //     labels: this.doughnutChartLabels,
    //     datasets: [{
    //       data: values
    //     }]
    //   }
    // })

    this.graficasService.getusuariosRedesSocialesDonaData()
      .subscribe(({ labels, values }) => {
        this.doughnutChartData = {
          labels: labels,
          datasets: [{
            data: values
          }]
        }
      })


  }

}
