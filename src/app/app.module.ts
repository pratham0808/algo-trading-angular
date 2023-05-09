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
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HighchartsChartModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
