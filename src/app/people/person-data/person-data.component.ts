import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { PeopleService } from "../shared/people.service";
import { Subscription } from "rxjs/Subscription";
import { FilmDataComponent } from "../../films/film-data/film-data.component";

@Component({
    selector: 'person-data',
    templateUrl: './person-data.component.html',
    styleUrls: ['./person-data.component.scss']
})
export class PersonDataComponent implements OnInit, OnDestroy{
    personSubs : Subscription;
    routeSubs : Subscription;
    person: any;
    isLoading: boolean = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private peopleService: PeopleService,
        private filmDataComponent: FilmDataComponent
    ){
        this.person = {
            name: '',
            height: '',
            hair_color: '',
            skin_color: '',
            eye_color: '',
            birth_year: '',
            gender: '',
            films: []
        };
    }

    ngOnInit(){
        this.routeSubs = this.route.params.subscribe(data => {
            if(data.id) {
                this.isLoading = true;
                this.personSubs = this.getPersonSubscription(data.id);
                if(this.filmDataComponent && !this.filmDataComponent.sidenavRight.opened) {this.filmDataComponent.sidenavRight.open();}
            }
        });
    }

    ngOnDestroy(){
        if(this.routeSubs) this.routeSubs.unsubscribe();
        if(this.personSubs) this.personSubs.unsubscribe();
    }

    getPersonSubscription(id) : Subscription {
        return this
            .peopleService
            .getPerson(id)
            .subscribe(data => {
                this.person = data.json();
                this.isLoading = false;
            });
    }

    close(){
        this.filmDataComponent.closeSidenav();
    }
}