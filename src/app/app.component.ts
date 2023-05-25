import { Component, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { BackTestingGraphComponent } from './back-testing-graph/back-testing-graph.component';
import { ChartingComponent } from './charting/charting.component';
import { TradesConsoleComponent } from './trades-console/trades-console.component';
import { HttpCallsService } from './_services/http-calls.service';
import { ExecutedTradeInf, SignalInf, TradeStatus } from './_services/interfaces';
import { EventStreamService } from './_services/server-sent-events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private eventStreamService: EventStreamService, private httpService: HttpCallsService) { }

  emaCoPoints: { timeStamp: Date, ema7: number, ema21: number }[] = [];
  emaSinglePoints: { timeStamp: Date, ema: number }[] = [];

  @ViewChild('charting') charting!: ChartingComponent;
  @ViewChild('backtest') backtest!: BackTestingGraphComponent;
  @ViewChild('backtest') tradesConsole!: TradesConsoleComponent;

  ngOnInit(): void {
    this.eventStreamService.subscribeToEventStream('http://localhost:5000/notif/storerequest')
      .subscribe(data => {
        let sseData = JSON.parse(data);
        if (sseData.subject === 'executed-trades') {
          this.tradesConsole.getTrades();
        }
        if (sseData.subject === 'ema-single-data') {
          this.emaSinglePoints = sseData.data;
          this.charting.drawSingleChart(this.emaSinglePoints);
        }
        if (sseData.subject === 'ema-crossover-data') {
          this.emaCoPoints = sseData.data;
          this.charting.drawCrossoverChart(this.emaCoPoints);
        }
      });
  }

  ngOnDestroy(): void {

  }

  onTabChange(event: MatTabChangeEvent) {
    console.log('Tab changed to index', event.index);
    if (event.index === 2) {
      //this.backtest.backTestingData();
    }
  }
}
