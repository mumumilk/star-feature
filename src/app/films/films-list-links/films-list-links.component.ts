import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { Router } from "@angular/router";
import { HttpService } from "../../shared/services/http.service";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'films-list-links',
    template: `
    <mat-expansion-panel>
    <mat-expansion-panel-header>
        <mat-panel-title>
            <mat-icon>theaters</mat-icon> &nbsp; FILMS
        </mat-panel-title>
        </mat-expansion-panel-header>
            <mat-nav-list>
                <mat-list-item *ngFor="let film of films">{{film}}</mat-list-item>
            </mat-nav-list>
    </mat-expansion-panel>
    `
})
export class FilmsListLinksComponent implements OnDestroy {
    films: any[] = [];
    filmSubs: Subscription;
    private _filmsURL : any[] = []; 

    @Input()
    set filmsURL(filmsURL: string[]) {
        if(filmsURL && filmsURL.length > 0) this.fillFilmsArray(filmsURL);
    }

    constructor(
        private router: Router,
        private httpService: HttpService
    ) { }

    fillFilmsArray(urls: string[]){
        urls.forEach(url => {
            this.filmSubs = this.getFilmsSubscription(url);
        });
    }

    getFilmsSubscription(url): Subscription {
        return this
            .httpService
            .getByURL(url)
            .subscribe(data => {
                let film = data.json();
                this.films.push(film.title);
            });
    }

    ngOnDestroy() {
        if (this.filmSubs) this.filmSubs.unsubscribe();
    }
}