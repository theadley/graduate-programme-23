import { map, Subject } from "rxjs";
import { combineLatestWith } from "rxjs/operators";

export const powerGrid1$ = new Subject();
export const powerGrid2$ = new Subject();
export const steamPipe$ = new Subject();

export const powerAvailable$ = powerGrid1$.pipe(
  combineLatestWith(powerGrid2$),
  map(([power1, power2]) => power1 + power2)
);
