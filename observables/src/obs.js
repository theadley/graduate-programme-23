import { timer } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { concatMap, switchMap } from "rxjs/operators";

export const issPos$ = timer(0, 10000).pipe(
  concatMap(() =>
    fromFetch(`https://api.wheretheiss.at/v1/satellites/25544`).pipe(
      switchMap((response) => response.json())
    )
  )
);
