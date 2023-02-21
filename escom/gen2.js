import { powerGrid2$, steamPipe$ } from "./eskom";

steamPipe$.subscribe((steam) => {
  console.log("Steam G2", steam);
  if (steam > 8) {
    console.log("G2", 3);
    powerGrid2$.next(3);
  } else if (steam > 3) {
    console.log("G2", 1);
    powerGrid2$.next(1);
  } else {
    console.log("G2", 0);
    powerGrid2$.next(0);
  }
});
