import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TestComponentComponent} from './components/test-component/test-component.component';
import {PurpleComponent} from './components/purple/purple.component';
import {ShareStateRxjsComponent} from './components/share-state-rxjs/share-state-rxjs.component';
import {NameInputComponent} from './components/name-input/name-input.component';
import {FormsModule} from "@angular/forms";
import { ListRendererComponent } from './components/list-renderer/list-renderer.component';
import { ShoppingListItemComponent } from './components/shopping-list-item/shopping-list-item.component';
import {HttpClientModule} from "@angular/common/http";
import { F1SeasonComponent } from './components/f1-season/f1-season.component';
import { FilterRacesPipe } from './pipes/filter-races.pipe';
import { RaceTileComponent } from './components/race-tile/race-tile.component';
import { RaceWinnerComponent } from './components/race-winner/race-winner.component';
import { AnimationComponent } from './components/animation/animation.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from '@angular/service-worker';
import { DriverResultComponent } from './components/driver-result/driver-result.component';
import { NationalityFlagPipe } from './pipes/nationality-flag.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    PurpleComponent,
    ShareStateRxjsComponent,
    NameInputComponent,
    ListRendererComponent,
    ShoppingListItemComponent,
    F1SeasonComponent,
    FilterRacesPipe,
    RaceTileComponent,
    RaceWinnerComponent,
    AnimationComponent,
    DriverResultComponent,
    NationalityFlagPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [FilterRacesPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
