import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { FilmsService } from "../shared/films.service";
import { ActivatedRoute, Router } from "@angular/router";
import { RequestOptions, Http, Headers } from "@angular/http";
import { HttpService } from "../../shared/services/http.service";
import { MatSidenav } from "@angular/material";
import { AppComponent } from "../../app.component";


@Component({
    selector: 'film-data',
    templateUrl: './film-data.component.html',
    styleUrls: ['./film-data.component.scss']
})
export class FilmDataComponent implements OnInit, OnDestroy{
    @ViewChild('sidenavRight') sidenavRight : MatSidenav;

    filmSubs : Subscription;
    routeSubs : Subscription;
    planetsSubs : Subscription;
    charactersSubs : Subscription;

    film : any;
    filmId : number; 
    planets : Array<any> = new Array<any>();
    characters: Array<any> = new Array<any>();
    isLoading : boolean = false;

    constructor(
        private activatedRoute: ActivatedRoute,
        private http: Http,
        private httpService : HttpService,
        private filmsService : FilmsService,
        private router: Router,
        public appComponent : AppComponent
    ){}

    ngOnInit(){
        this.isLoading = true;
        this.routeSubs = this.activatedRoute.params.subscribe(data => {
            if(data.id) {
                this.filmId = data.id;
                this.filmSubs = this.getFilmSubscription(data.id)
            };
        });
    }

    ngOnDestroy(){
        if(this.filmSubs) this.filmSubs.unsubscribe();
        if(this.routeSubs) this.routeSubs.unsubscribe();
        if(this.planetsSubs) this.planetsSubs.unsubscribe();
        if(this.charactersSubs) this.charactersSubs.unsubscribe();
    }

    getFilmSubscription(id) : Subscription {
        return this 
            .filmsService
            .getFilm(id)
            .subscribe((data) => {
                this.film = data.json();
                (this.film.planets as string[]).forEach(planetURL => {
                    this.planetsSubs = this.getPlanetsSubscription(planetURL);
                });
                (this.film.characters as string[]).forEach(characterURL => {
                    this.charactersSubs = this.getCharactersSubscription(characterURL);
                });
            });
    }

    getPlanetsSubscription(url) : Subscription {
        return this
            .httpService
            .getByURL(url)
            .subscribe((data) => {
                this.isLoading = false;
                this.planets.push(data.json());
            });
    }

    getCharactersSubscription(url) : Subscription {
        return this
            .httpService
            .getByURL(url)
            .subscribe((data) => {
                this.isLoading = false;
                this.characters.push(data.json());
            });
    }

    planetDetails(url) {
        this.router.navigate(['films/' + this.filmId + '/planet/' + url.match(/\d+/)[0]]);
        this.sidenavRight.open();
    }

    characterDetails(url) {
        this.router.navigate(['films/' + this.filmId + '/character/' + url.match(/\d+/)[0]]);
        this.sidenavRight.open();
    }
    
    closeSidenav() {
        if (this.sidenavRight.opened)
          this.sidenavRight.close();
        if (this.router.url.indexOf('/character/') !== -1 || this.router.url.indexOf('/planet/') !== -1)
          this.router.navigate(['films/' + this.filmId]);
    }

}