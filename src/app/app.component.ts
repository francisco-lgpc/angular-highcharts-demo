import { Component } from '@angular/core';
import { DATA } from './data';

@Component({
    selector: 'app',
    template: `
        <chart [options]=options></chart>
    `
})
export class AppComponent {
  options = {
    rangeSelector: {
          selected: 2
      },

      title: {
          text: 'AAPL Stock Price'
      },

      series: [{
          type: 'ohlc',
          name: 'AAPL Stock Price',
          data: DATA,
          dataGrouping: {
              units: [[
                  'week', // unit name
                  [1] // allowed multiples
              ], [
                  'month',
                  [1, 2, 3, 4, 6]
              ]]
          }
      }]
  }
}
