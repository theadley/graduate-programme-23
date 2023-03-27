import {Component} from '@angular/core';
import {F1Service} from "../../services/f1.service";
import {
  Observable,
  BehaviorSubject,
} from "rxjs";
import {
  debounceTime,
  distinctUntilChanged
} from "rxjs/operators";
import {F1APIResponse, Race} from "../../models/f1";
import {byCountry} from "country-code-lookup";

@Component({
  selector: 'app-f1-season',
  templateUrl: './f1-season.component.html',
  styleUrls: ['./f1-season.component.scss']
})
export class F1SeasonComponent {

  filterText$: Observable<string>;
  inputText$ = new BehaviorSubject<string>('');
  currentF1Season$: Observable<F1APIResponse>;

  constructor(private f1APIService: F1Service) {
    this.currentF1Season$ = this.f1APIService.getCurrentF1Season();

    this.filterText$ = this.inputText$
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
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
}
