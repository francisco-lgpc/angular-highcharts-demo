import { Component, ElementRef, Input } from '@angular/core';
import { stockChart, Chart, Options, PlotLineOrBand } from 'highcharts/highstock';
import { v4 as uuid } from 'uuid';
import { random } from 'lodash';

@Component({
    selector: 'chart',
    template: '',
})
export class ChartComponent {
  chart: Chart;
  chartOptions: Options = {};

  plotLines = <Array<PlotLineOrBand>>[];

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

  addPlotLine() {
    const id = uuid();

    const line = this.chart.yAxis[0].addPlotLine({
      id,
      value: random(150, 300),
      color: 'red',
      width: 2,
      label: {
        text: id,
      },
    })

    if (!line) return;

    this.plotLines.push(line);
  }

  removeFirstPlotLine() {
    if (!this.plotLines.length) return;

    this.plotLines[0].destroy();
    this.plotLines.shift();
  }

  updateYAxisOptions() {
    this.chart.yAxis[0].update({});
  }
}
