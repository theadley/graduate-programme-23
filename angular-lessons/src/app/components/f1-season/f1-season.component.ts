import {Component} from '@angular/core';
import {F1Service} from "../../services/f1.service";
import {
  Observable,
  BehaviorSubject, first, switchAll, switchMap,
} from "rxjs";
import {
  debounceTime,
  distinctUntilChanged
} from "rxjs/operators";
import {F1APIResponse, Race} from "../../models/f1";
import {byCountry} from "country-code-lookup";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-f1-season',
  templateUrl: './f1-season.component.html',
  styleUrls: ['./f1-season.component.scss']
})
export class F1SeasonComponent {

  filterText$: Observable<string>;
  inputText$ = new BehaviorSubject<string>('');
  currentF1Season$: Observable<F1APIResponse>|undefined;

  constructor(
    private f1APIService: F1Service,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // this.currentF1Season$ = this.f1APIService.getCurrentF1Season();

    this.filterText$ = this.inputText$
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      );

    // this.route.queryParams.pipe(first()).subscribe(params => {
    //   this.currentF1Season$ = this.f1APIService.getF1Season(params['year'] ?? 'current');
    // })

    // this.currentF1Season$ = this.route.queryParams
    //   .pipe(
    //     switchMap(params =>
    //       this.f1APIService.getF1Season(params['year'] ?? 'current')
    //     )
    //   );

    // route.firstChild?.paramMap
    this.currentF1Season$ = route.paramMap
      .pipe(
        switchMap(params =>
          this.f1APIService.getF1Season(
            params.get('year') ?? 'current',
          )
        )
      );
  }

  getCountryCode(country: string | undefined): string | undefined {
    if(!country) return undefined;
    if (country === 'UK') return 'GB'
    if (country === 'USA') return 'US'
    if (country === 'UAE') return 'AE'


    const result = byCountry(country);
    if (!result) return '';
    return result.iso2;
  }

  trackRace(index: number, race:Race): string {
    return race.url;
  }

  handleFilterInputChanged(event: Event) {
    this.inputText$.next((event.target as HTMLInputElement).value);
  }

  routeToRace(f1Race: Race) {
    this.router.navigate(['races-hr-compliant-kind', f1Race.season, 'race', f1Race.round]);
  }
}
