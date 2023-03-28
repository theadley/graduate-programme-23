import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {F1SeasonComponent} from "./components/f1-season/f1-season.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {RaceWinnerComponent} from "./components/race-winner/race-winner.component";

const routes: Routes = [
  {
    path: 'races-hr-compliant-kind',
    component: F1SeasonComponent,
    children: [
      {
        path: ':year/race/:raceNumber',
        component: RaceWinnerComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'races-hr-compliant-kind',
    pathMatch: "full"
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
