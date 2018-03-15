import { Injectable } from "@angular/core";
import { Http, HttpModule, Request, Headers, RequestOptions, RequestMethod, Response, ResponseContentType } from "@angular/http";

import { AppSettings } from "../../app.settings";
import { Observable } from "rxjs/Observable";

@Injectable()
export class PeopleService {
    options: RequestOptions = new RequestOptions();

    constructor(
        private http: Http
    ) {
        this.options.headers = new Headers();
        this.options.headers.set('Content-Type', 'application/json');
    }

    getPerson(id): Observable<Response> {
        return this.http
            .get(AppSettings.API_ENDPOINT + 'people/' + id, this.options);
    }
}