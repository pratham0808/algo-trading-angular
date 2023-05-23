import { Component, Input } from '@angular/core';
import * as moment from 'moment';
import { BTTradesInf } from '../_services/interfaces';


@Component({
  selector: 'app-back-tested-trades',
  templateUrl: './back-tested-trades.component.html',
  styleUrls: ['./back-tested-trades.component.scss']
})
export class BackTestedTradesComponent {
  @Input()
  tradeDataArray: BTTradesInf[] = [];

  formatTime(time: Date) {
    return moment(time).format('DD-MMM,h:mmA');
  }

}
