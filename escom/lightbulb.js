import { powerAvailable$ } from "./eskom";
powerAvailable$.subscribe((power) => {
  console.log("Power Avail", power);
  const bulb = document.getElementById("app");
  if (power >= 2) {
    bulb.style.backgroundColor = "yellow";
  } else {
    bulb.style.backgroundColor = "gray";
  }
});
