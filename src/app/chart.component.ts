import { Component, ElementRef, Input } from '@angular/core';
import { stockChart, Chart, Options } from 'highcharts/highstock';

@Component({
    selector: 'chart',
    template: '',
})
export class ChartComponent {
  chart: Chart;
  chartOptions: Options = {};

  @Input() set options(value: Options) {
    this.chartOptions = { ...this.chartOptions, ...value }

    this.updateOrCreateChart();
  }


  constructor(
    private readonly elementRef: ElementRef,
  ) {}

   private updateOrCreateChart(): void {
    this.chart == null ? this.createChart() : this.updateChart();
   }

  createChart() {
    stockChart(this.elementRef.nativeElement, this.chartOptions, chart => this.chart = chart);
  }

  updateChart() {
    this.chart.update(this.chartOptions, true, true);
  }
}
