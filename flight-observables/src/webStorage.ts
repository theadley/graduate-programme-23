import { flightList$ } from "./main";

flightList$.subscribe(flights => localStorage.setItem('flights', JSON.stringify(flights)));

