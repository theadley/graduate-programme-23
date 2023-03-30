import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {F1SeasonComponent} from "./components/f1-season/f1-season.component";
import {RaceWinnerComponent} from "./components/race-winner/race-winner.component";
import {FanGuard} from "./guards/fan.guard";

const routes: Routes = [
  {
    path: 'races-hr-compliant-kind',
    component: F1SeasonComponent,
    children: [
      {
        path: ':year/race/:raceNumber',
        component: RaceWinnerComponent
      }
    ],
    canActivate: [FanGuard]
  },
  {
    path: 'races-hr-compliant-kind/:year',
    component: F1SeasonComponent,
  },
  {
    path: '',
    redirectTo: 'races-hr-compliant-kind',
    pathMatch: "full"
  },
  {
    path: 'not-found',
    loadChildren: () => import('./modules/not-found/not-found.module')
      .then(m => m.NotFoundModule)
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
