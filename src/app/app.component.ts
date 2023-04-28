import { Component } from '@angular/core';
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

  conductedTrades : ExecutedTradeInf[] = [];
  signals: SignalInf[] = [];
  totalProfitLoss = 0;

  ngOnInit(): void {
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
      });
  }

  ngOnDestroy(): void {

  }

  startTrading() {
    this.httpService.startTrading().subscribe(data => {
      console.log(data);
    });
  }

}
