import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Injector } from '@angular/core';
import { XHRBackend, RequestOptions, Http, HttpModule } from '@angular/http';
import { Router } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FilmsListComponent } from './films/films-list/films-list.component';
import { FilmDataComponent } from './films/film-data/film-data.component';
import { HttpService } from './shared/services/http.service';
import { FilmsService } from './films/shared/films.service';
import { MaterialModule } from './shared/modules/material.module';
import { PersonDataComponent } from './people/person-data/person-data.component';
import { PeopleService } from './people/shared/people.service';
import { PlanetDataComponent } from './planets/planet-data/planet-data.component';
import { PlanetService } from './planets/shared/planet.service';
import { FilmsListLinksComponent } from './films/films-list-links/films-list-links.component';



@NgModule({
  declarations: [
    AppComponent,
    FilmsListComponent,
    FilmDataComponent,
    PersonDataComponent,
    PlanetDataComponent,
    FilmsListLinksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    HttpService,
    FilmsService,
    PeopleService,
    PlanetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
