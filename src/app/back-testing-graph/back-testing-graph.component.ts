import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartingComponent } from '../charting/charting.component';
import { HttpCallsService } from '../_services/http-calls.service';

@Component({
  selector: 'app-back-testing-graph',
  templateUrl: './back-testing-graph.component.html',
  styleUrls: ['./back-testing-graph.component.scss']
})
export class BackTestingGraphComponent implements OnInit {

  @ViewChild('charting') charting!: ChartingComponent;

  constructor(private httpService: HttpCallsService) { }

  ngOnInit(): void {
  }

  backTestingData() {
    this.httpService.backTestingData().subscribe((data: any) => {
      let emaSinglePoints = data.emaData;
      let ohlc = data.ohlc;
      this.charting.drawChart(ohlc, emaSinglePoints);
    });
  }


}
