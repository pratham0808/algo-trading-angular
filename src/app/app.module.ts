import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignalsTableComponent } from './signals-table/signals-table.component';
import { TradesExecutedTableComponent } from './trades-executed-table/trades-executed-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SignalsTableComponent,
    TradesExecutedTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
