import { Component, Input } from '@angular/core';
import * as moment from 'moment';
import { ExecutedTradeInf } from '../_services/interfaces';

@Component({
  selector: 'app-trades-executed-table',
  templateUrl: './trades-executed-table.component.html',
  styleUrls: ['./trades-executed-table.component.scss']
})
export class TradesExecutedTableComponent {

  @Input()
  tradeDataArray: ExecutedTradeInf[] = [];

  formatTime(time: Date) {
    return moment(time).format('h:mmA');
  }
}
