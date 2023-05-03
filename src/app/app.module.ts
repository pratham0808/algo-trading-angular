import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignalsTableComponent } from './signals-table/signals-table.component';
import { TradesExecutedTableComponent } from './trades-executed-table/trades-executed-table.component';
import { ChartingComponent } from './charting/charting.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    SignalsTableComponent,
    TradesExecutedTableComponent,
    ChartingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighchartsChartModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
