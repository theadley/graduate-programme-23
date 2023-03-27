import { BehaviorSubject, Observable } from 'rxjs';
import { combineLatestWith, map } from 'rxjs/operators';
import { IFlight } from './models/flight';
import { flightArray$ } from './services/flight.service';
import './style.css';

export const flightList$ = new BehaviorSubject<IFlight[]>([]);
export const countries$ = flightArray$
  .pipe(
    map(flights => new Set(
      flights.map(flight => flight.origin_country)
    )
    ));
export const selectedCountry$ = new BehaviorSubject<string>('');
export const selectedFlightICAO24$ = new BehaviorSubject<string | undefined>(undefined);


// Derived state
export const filteredFlight$: Observable<IFlight[]> = flightList$
  .pipe(
    combineLatestWith(selectedCountry$),
    map(
      ([flightList, selectedCountry]) => flightList.filter(flight => flight.callsign?.length > 0 && flight.origin_country === selectedCountry)
    )
  );
export const selectedFlight$: Observable<IFlight | undefined> = flightList$
  .pipe(
    combineLatestWith(selectedFlightICAO24$),
    map(
      ([flightList, selectedICAO24]) => flightList.find(flight => flight.icao24 === selectedICAO24)
    )
  );

// Go fetch flights
flightArray$.subscribe(flights => flightList$.next(flights));