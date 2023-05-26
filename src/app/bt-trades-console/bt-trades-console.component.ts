import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpCallsService } from '../_services/http-calls.service';
import { ExecutedTradeInf, TradeStatus } from '../_services/interfaces';

@Component({
  selector: 'app-bt-trades-console',
  templateUrl: './bt-trades-console.component.html',
  styleUrls: ['./bt-trades-console.component.scss']
})
export class BtTradesConsoleComponent {

  totalProfitLoss = 0;
  winTrades = 0;
  lostTrades = 0;
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  conductedTrades: ExecutedTradeInf[] = [];

  constructor(private httpService: HttpCallsService) { }

  getBTTrades() {
    let value = this.range.value;
    if(!(value.start && value.end)) {
      return;
    }
    this.httpService.getBtTrades(value.start.toISOString(), value.end.toISOString()).subscribe((data: any) => {
      this.conductedTrades = data.data;
      this.winTrades = 0;
      this.lostTrades = 0;
      this.conductedTrades.forEach((trade) => {
        if (trade.status === TradeStatus.PROFIT) {
          this.winTrades++;
        }
        if (trade.status === TradeStatus.LOSS) {
          this.lostTrades++;
        }
      })
      this.totalProfitLoss = Math.round(data.totalProfitLoss);
    });
  }

}
