import { Component, Input } from '@angular/core';
import { SignalInf } from '../_services/interfaces';

@Component({
  selector: 'app-signals-table',
  templateUrl: './signals-table.component.html',
  styleUrls: ['./signals-table.component.scss']
})
export class SignalsTableComponent {
  
  @Input()
  signals: SignalInf[] = [];
}
