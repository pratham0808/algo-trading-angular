import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from "moment";

@Injectable({
    providedIn: 'root'
})
export class HttpCallsService {

    constructor(
        private http: HttpClient,
    ) { }

}
