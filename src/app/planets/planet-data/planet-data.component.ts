import { Component, OnInit, OnDestroy } from "@angular/core";
import { FilmDataComponent } from "../../films/film-data/film-data.component";
import { Subscription } from "rxjs/Subscription";
import { Router, ActivatedRoute } from "@angular/router";
import { PlanetService } from "../shared/planet.service";
import { FilmsService } from "../../films/shared/films.service";
import { HttpService } from "../../shared/services/http.service";

@Component({
    selector: 'planet-data',
    templateUrl: './planet-data.component.html',
    styleUrls: ['./planet-data.component.scss']
})
export class PlanetDataComponent implements OnInit, OnDestroy{
    planetSubs : Subscription;
    routeSubs: Subscription;
    filmsSubs: Subscription;
    
    planet : any;
    isLoading : boolean = false;
    planetFilms : any[] = [];
    
    constructor(
        private filmDataComponent : FilmDataComponent,
        private router: Router,
        private route: ActivatedRoute,
        private planetService: PlanetService,
        private httpService: HttpService
    ){
        this.planet = {
            name: '', 
            population: '', 
            diameter: '', 
            climate: '', 
            gravity: '',
            films: [],
        };

    }

    ngOnInit(){
        this.routeSubs = this.route.params.subscribe(data => {
            if(data.id){
                this.isLoading = true;
                this.planetSubs = this.getPlanetSubscription(data.id);
                if(this.filmDataComponent && !this.filmDataComponent.sidenavRight.opened) this.filmDataComponent.sidenavRight.open();
            }
        })
    }

    ngOnDestroy(){
        if(this.routeSubs) this.routeSubs.unsubscribe();
        if(this.planetSubs) this.planetSubs.unsubscribe();
    }

    getPlanetSubscription(id) : Subscription{
        return this
            .planetService
            .getPlanet(id)
            .subscribe(data => {
                this.planet = data.json();
                this.isLoading = false;
            });
    } 


    close(){
        this.filmDataComponent.closeSidenav();
    }
}