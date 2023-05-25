import { Component, OnInit } from '@angular/core';
import { HttpCallsService } from '../_services/http-calls.service';
import { ExecutedTradeInf, TradeStatus } from '../_services/interfaces';

@Component({
  selector: 'app-trades-console',
  templateUrl: './trades-console.component.html',
  styleUrls: ['./trades-console.component.scss']
})
export class TradesConsoleComponent implements OnInit {

  conductedTrades: ExecutedTradeInf[] = [];

  constructor(private httpService: HttpCallsService) { }

  ngOnInit(): void {
    this.getTrades();
  }

  onAuth() {
    this.httpService.getAuth().subscribe((data: any) => {
      if (data.url) {
        window.location.href = data.url;
      }
    });
  }

  startTrading() {
    this.httpService.startTrading().subscribe(data => {
      console.log(data);
    });
  }

  getTrades() {
    this.httpService.getTrades().subscribe((data: any) => {
      this.conductedTrades = data.data;
    });
  }

}
