import { Component, Input } from '@angular/core';
import * as moment from 'moment';
import { ExecutedTradeInf } from '../_services/interfaces';

@Component({
  selector: 'app-back-tested-trades',
  templateUrl: './back-tested-trades.component.html',
  styleUrls: ['./back-tested-trades.component.scss']
})
export class BackTestedTradesComponent {
  @Input()
  tradeDataArray: ExecutedTradeInf[] = [];

  formatTime(time: Date) {
    return moment(time).format('DD-MMM,h:mmA');
  }

  sortColumn: keyof ExecutedTradeInf = 'tradeTakenIndex'; // Default sort column
  sortDirection: 'asc' | 'desc' = 'asc'; // Default sort direction
  
  onSort(column: keyof ExecutedTradeInf) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
  
    this.sortTradeDataArray();
  }
  
  sortTradeDataArray() {
    this.tradeDataArray = this.tradeDataArray.slice().sort((a, b) => {
      const valueA = a[this.sortColumn];
      const valueB = b[this.sortColumn];
  
      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return this.sortDirection === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
      }
  
      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return this.sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
      }
  
      return 0; // Default case
    });
  }
}
