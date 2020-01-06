import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import * as Highcharts from 'highcharts/highstock';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart.component';

import Indicators from 'highcharts/indicators/indicators';
import IndicatorsAll from 'highcharts/indicators/indicators-all';
import AnnotationsAdvanced from 'highcharts/modules/annotations-advanced';
import DragPanes from 'highcharts/modules/drag-panes';
import FullScreen from 'highcharts/modules/full-screen';
import PriceIndicator from 'highcharts/modules/price-indicator';
import StockTools from 'highcharts/modules/stock-tools';

export const HIGHCHARTS_MODULES = [
  Indicators,
  IndicatorsAll,
  DragPanes,
  AnnotationsAdvanced,
  PriceIndicator,
  FullScreen,
  StockTools,
];

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
  ],
  declarations: [ AppComponent, ChartComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  constructor() {
    HIGHCHARTS_MODULES.forEach(highchartsModule => highchartsModule(Highcharts));
  }
}