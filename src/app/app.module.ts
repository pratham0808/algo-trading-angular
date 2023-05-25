import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignalsTableComponent } from './signals-table/signals-table.component';
import { TradesExecutedTableComponent } from './trades-executed-table/trades-executed-table.component';
import { ChartingComponent } from './charting/charting.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { MaterialModule } from './material/material.module';
import { BackTestingGraphComponent } from './back-testing-graph/back-testing-graph.component';
import StockModule from 'highcharts/modules/stock';
import * as Highcharts from 'highcharts';
import { BackTestedTradesComponent } from './back-tested-trades/back-tested-trades.component';
import { FormsModule } from '@angular/forms';
import { TradesConsoleComponent } from './trades-console/trades-console.component';
import { BtTradesConsoleComponent } from './bt-trades-console/bt-trades-console.component';

StockModule(Highcharts);

@NgModule({
  declarations: [
    AppComponent,
    SignalsTableComponent,
    TradesExecutedTableComponent,
    ChartingComponent,
    BackTestingGraphComponent,
    BackTestedTradesComponent,
    TradesConsoleComponent,
    BtTradesConsoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    HighchartsChartModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
