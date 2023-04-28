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

}
