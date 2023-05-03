import { Component, ViewChild } from '@angular/core';
import { ChartingComponent } from './charting/charting.component';
import { HttpCallsService } from './_services/http-calls.service';
import { ExecutedTradeInf, SignalInf } from './_services/interfaces';
import { EventStreamService } from './_services/server-sent-events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private eventStreamService: EventStreamService, private httpService: HttpCallsService) { }

  conductedTrades: ExecutedTradeInf[] = [];
  signals: SignalInf[] = [];
  emaPoints: { timeStamp: Date, ema: number }[] = [];
  totalProfitLoss = 0;

  @ViewChild('charting') charting!: ChartingComponent;

  ngOnInit(): void {
    this.getSignals();
    this.getTrades();
    this.eventStreamService.subscribeToEventStream('http://localhost:5000/notif/storerequest')
      .subscribe(data => {
        console.log(data);
        let sseData = JSON.parse(data);
        if (sseData.subject === 'executed-trades') {
          this.conductedTrades = sseData.data;
        }
        if (sseData.subject === 'signals-sent') {
          this.signals = sseData.data;
        }
        if (sseData.subject === 'total-profit-loss') {
          this.totalProfitLoss = sseData.data;
        }
        if (sseData.subject === 'ema-data') {
          this.emaPoints = sseData.data;
          this.charting.drawChart(this.emaPoints);
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
    });
  }

}
