import { NgModule, ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FilmsListComponent } from "./films/films-list/films-list.component";
import { FilmDataComponent } from "./films/film-data/film-data.component";
import { PersonDataComponent } from "./people/person-data/person-data.component";
import { PlanetDataComponent } from "./planets/planet-data/planet-data.component";

const appRoutes : Routes = [
    { 
        path: '', redirectTo: 'films', pathMatch: 'full'
    },
    { 
        path: 'films', component: FilmsListComponent
    },
    {
        path: 'films/:id', component: FilmDataComponent, children: [
            {path: 'character/:id', component: PersonDataComponent},
            {path: 'planet/:id', component: PlanetDataComponent}
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: false})],
    exports: [RouterModule]
})
export class AppRoutingModule{}