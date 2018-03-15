import { Injectable } from "@angular/core";
import { Http, HttpModule, Request, Headers, RequestOptions, RequestMethod, Response, ResponseContentType } from "@angular/http";

import { AppSettings } from "../../app.settings";
import { Observable } from "rxjs/Observable";

@Injectable()
export class HttpService{

    options : RequestOptions = new RequestOptions();

    constructor(
        private http: Http
    ){
        this.options.headers = new Headers();
        this.options.headers.set('Content-Type', 'application/json');
    }

    getByURL(url: string) : Observable<Response>{
        return this.http
            .get(url, this.options);
    }
}