import { Component, OnInit } from "@angular/core";
import { OnDestroy } from "@angular/core/src/metadata/lifecycle_hooks";
import { Subscription } from "rxjs/Subscription";
import { Router } from "@angular/router";
import { Response } from "@angular/http/src/static_response";

import { HttpResponse } from "selenium-webdriver/http";
import { FilmsService } from "../shared/films.service";


@Component({
    selector: 'films-list',
    templateUrl: './films-list.component.html',
    styleUrls: ['./films-list.component.scss']
})

export class FilmsListComponent  implements OnInit, OnDestroy{
    filmsSubs : Subscription;
    films;
    isLoading : boolean = false;

    constructor(
        private filmsService: FilmsService,
        private router: Router
    ){}

    ngOnInit(){
        this.isLoading = true;
        this.filmsSubs = this.getFilmsSubscription();
    }

    getFilmsSubscription() : Subscription{
        return this
            .filmsService
            .getFilms()
            .subscribe((data: Response) => {
                this.films = (data.json().results as any[]).sort((film1, film2) => film1.episode_id - film2.episode_id);
                this.isLoading = false;
            });
    }
    

    ngOnDestroy(){
        if(this.filmsSubs) {this.filmsSubs.unsubscribe()}
    }

    openFilmDetails(url: string){
        this.router.navigate(['/films/' + url.match(/\d+/)[0]]);
    }

    getFilmImage(episode_id: number) : string{
        return 'assets/img/' + this.getRomanNumerals(episode_id) + '.jpg';
    }

    getRomanNumerals(num: number) : string {
        switch (num) {
            case 1: return 'I'   ;
            case 2: return 'II'  ;
            case 3: return 'III' ;
            case 4: return 'IV'  ;
            case 5: return 'V'   ;
            case 6: return 'VI'  ;
            case 7: return 'VII' ;
        }
    }
}