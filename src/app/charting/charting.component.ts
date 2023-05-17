import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as moment from 'moment-timezone';
import { timestamp } from 'rxjs';
import { QuoteObj } from '../_services/interfaces';

@Component({
  selector: 'app-charting',
  templateUrl: './charting.component.html',
  styleUrls: ['./charting.component.scss']
})
export class ChartingComponent {

  @Input()
  id = '';

  chartOptions = {
    chart: {
      type: 'line',
      height: 650
    },
    title: {
      text: 'EMA Line'
    },

    plotOptions: {
      series: {
        animation: false
      }
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Time'
      }
    } as Highcharts.XAxisOptions,
    yAxis: {
      title: {
        text: 'EMA'
      }
    },
    series: <any>[]
  }

  constructor() { }

  ngOnInit(): void {
  }

  drawCrossoverChart(emaPoints: { timeStamp: Date, ema7: number, ema21: number }[]) {
    const ema7Data = emaPoints.map((point) => [
      new Date(moment(point.timeStamp).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')).getTime(),
      Math.round(point.ema7)]);
    const ema21Data = emaPoints.map((point) => [
      new Date(moment(point.timeStamp).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')).getTime(),
      Math.round(point.ema21)]);

    this.chartOptions.series = [
      {
        type: 'line',
        name: '7 EMA',
        data: ema7Data
      },
      {
        type: 'line',
        name: '21 EMA',
        data: ema21Data
      }
    ]
    let chart = document.getElementById(this.id);
    if (chart) {
      Highcharts.chart(this.id, this.chartOptions);
    }
  }

  drawSingleChart(emaPoints: { timeStamp: Date, ema: number }[]) {
    const emaData = emaPoints.map((point) => [
      new Date(moment(point.timeStamp).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')).getTime(),
      Math.round(point.ema)]);

    this.chartOptions.series = [
      {
        type: 'line',
        name: 'EMA',
        data: emaData
      }
    ]
    let chart = document.getElementById(this.id);
    if (chart) {
      Highcharts.chart(this.id, this.chartOptions);
    }
  }

  drawChart(masterOhlc: QuoteObj[], emaPoints: { timeStamp: Date, ema: number }[]) {
    let ohlcData = masterOhlc.map((data) => {
      return [
        new Date(moment(data.timestamp).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')).getTime(),
        Math.round(data.open), Math.round(data.high), Math.round(data.low), Math.round(data.close)
      ]
    })
    const emaData = emaPoints.map((point) => [
      new Date(moment(point.timeStamp).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')).getTime(),
      Math.round(point.ema)]);
    let chart = document.getElementById(this.id);
    if (chart) {
      Highcharts.chart(this.id, {
        chart: {
          height: 650,
          zooming: {
            type: 'x'
          }
        },
        rangeSelector: {
          selected: 1
        },

        xAxis: {
          type: 'datetime',
        },
        title: {
          text: 'Bank Nifty Candlestick Chart'
        },
        plotOptions: {
          series: {
            marker: {
              enabled: false, // Disable markers (dots)
            },
          },
          candlestick: {
            color: 'red', 
            upColor: 'green', 
            lineColor: 'red', 
            upLineColor: "green"
          },
        },
        navigator: {
          enabled: true, // Enable the navigator
        },
        scrollbar: {
          enabled: true, // Enable the scrollbar
        },
        series: [{
          type: 'candlestick',
          name: 'Bank Nifty',
          groupPadding: 0.1,
          pointPadding: 0.04,
          data: ohlcData
        },
        {
          type: 'line',
          name: 'EMA',
          data: emaData
        }]
      });
    }
  }
}
