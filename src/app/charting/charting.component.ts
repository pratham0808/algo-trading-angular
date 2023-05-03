import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-charting',
  templateUrl: './charting.component.html',
  styleUrls: ['./charting.component.scss']
})
export class ChartingComponent {

  constructor() { }

  ngOnInit(): void {
  }

  drawChart(emaPoints: { timeStamp: Date, ema: number }[]) {
    const emaData = emaPoints.map((point) => [
      new Date(moment(point.timeStamp).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')).getTime(), 
      Math.round(point.ema)]);

    Highcharts.chart('ema-chart', {
      chart: {
        type: 'line'
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
      series: [{
        type: 'line',
        name: 'EMA',
        data: emaData
      }]
    });
  }

}
