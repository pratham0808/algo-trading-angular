import { Component, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { BackTestingGraphComponent } from './back-testing-graph/back-testing-graph.component';
import { ChartingComponent } from './charting/charting.component';
import { HttpCallsService } from './_services/http-calls.service';
import { BTTradesInf, ExecutedTradeInf, SignalInf } from './_services/interfaces';
import { EventStreamService } from './_services/server-sent-events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private eventStreamService: EventStreamService, private httpService: HttpCallsService) { }

  conductedTrades: ExecutedTradeInf[] = [];
  btTrades: BTTradesInf[] = [];
  signals: SignalInf[] = [];
  emaCoPoints: { timeStamp: Date, ema7: number, ema21: number }[] = [];
  emaSinglePoints: { timeStamp: Date, ema: number }[] = [];
  totalProfitLoss = 0;
  range = 1;

  @ViewChild('charting') charting!: ChartingComponent;
  @ViewChild('backtest') backtest!: BackTestingGraphComponent;

  ngOnInit(): void {
    //this.getSignals();
    this.getTrades();
    this.eventStreamService.subscribeToEventStream('http://localhost:5000/notif/storerequest')
      .subscribe(data => {
        let sseData = JSON.parse(data);
        if (sseData.subject === 'executed-trades') {
          this.getTrades();
        }
        if (sseData.subject === 'total-profit-loss') {
          this.totalProfitLoss = sseData.data;
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

  startTrading() {
    this.httpService.startTrading().subscribe(data => {
      console.log(data);
    });
  }

  getSignals() {
    this.httpService.getSignals().subscribe((data: any) => {
      this.signals = data.data;
    });
  }

  getTrades() {
    this.httpService.getTrades().subscribe((data: any) => {
      this.conductedTrades = data.data;
      this.totalProfitLoss = 0;
      this.conductedTrades.forEach((trade) => {
        if (trade.diffInvestment) {
          this.totalProfitLoss = this.totalProfitLoss + trade.diffInvestment
        }
      });
    });
  }

  getBTTrades() {
    this.httpService.getBtTrades(this.range).subscribe((data: any) => {
      this.btTrades = data.data;
      this.totalProfitLoss = Math.round(data.totalProfitLoss);
    });
  }

  onTabChange(event: MatTabChangeEvent) {
    console.log('Tab changed to index', event.index);
    if(event.index === 2) {
      //this.backtest.backTestingData();
    }
  }

  onAuth() {
    this.httpService.getAuth().subscribe((data: any) => {
      if (data.url) {
        window.location.href = data.url;
      }
    });
  }
}
