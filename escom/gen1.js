import { powerGrid1$, steamPipe$ } from "./eskom";

steamPipe$.subscribe((steam) => {
  console.log("Steam G1", steam);
  if (steam > 5) {
    console.log("G1", 1);
    powerGrid1$.next(1);
  } else {
    console.log("G1", 0);
    powerGrid1$.next(0);
  }
});
