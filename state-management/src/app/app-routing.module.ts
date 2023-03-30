import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DutyContainerComponent} from "./components/duty-container/duty-container.component";

const routes: Routes = [
  {
    path: 'ngrx',
    component: DutyContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
