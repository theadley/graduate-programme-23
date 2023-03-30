import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {combineLatestWith, Observable, switchMap} from "rxjs";
import {F1APIResponse} from "../../models/f1";
import {F1Service} from "../../services/f1.service";

@Component({
  selector: 'app-race-winner',
  templateUrl: './race-winner.component.html',
  styleUrls: ['./race-winner.component.scss']
})
export class RaceWinnerComponent {

  f1RaceResult$: Observable<F1APIResponse>;

  constructor(private route: ActivatedRoute, private f1APIService: F1Service) {
    // route.paramMap.subscribe(params => console.log(params.keys));

    this.f1RaceResult$ = route.paramMap
      .pipe(
        switchMap(params =>
          this.f1APIService.getF1RaceResult(
            params.get('year') ?? 'current',
            params.get('raceNumber') ?? 'latest'
          )
        )
      );
  }

}
