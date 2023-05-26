import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HttpCallsService {

    constructor(
        private http: HttpClient,
    ) { }

    startTrading() {
        let url = 'http://localhost:5000/algo/start';
        return this.http.get(url);
    }

    backTestingData() {
        let url = 'http://localhost:5000/algo/backtesting';
        return this.http.get(url);
    }

    getTrades() {
        let url = 'http://localhost:5000/algo/gettrades';
        return this.http.get(url);
    }

    getBtTrades(fromDate: string, toDate: string) {
        let url = `http://localhost:5000/algo/backtesting?fromDate=${fromDate}&toDate=${toDate}`;
        return this.http.get(url);
    }

    getSignals() {
        let url = 'http://localhost:5000/algo/getsignals';
        return this.http.get(url);
    }

    getAuth() {
        let url = 'http://localhost:5000/algo/auth';
        return this.http.get(url);
    }

}
