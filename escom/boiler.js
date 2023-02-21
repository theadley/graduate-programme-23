import { map, timer } from "rxjs";
import { steamPipe$ } from "./eskom";

// Pressure is between 0-9 and changes every second
timer(0, 1000)
  .pipe(map(() => Math.random() * 10))
  .subscribe((x) => steamPipe$.next(x));
