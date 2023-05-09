import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-charting',
  templateUrl: './charting.component.html',
  styleUrls: ['./charting.component.scss']
})
export class ChartingComponent {

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
    let chart = document.getElementById('ema-chart');
    if (chart) {
      Highcharts.chart('ema-chart', this.chartOptions);
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
    let chart = document.getElementById('ema-chart');
    if (chart) {
      Highcharts.chart('ema-chart', this.chartOptions);
    }
  }


}
