import { Subject } from "rxjs";

const countElement$ = new Subject();

// Only exported (API-level) function
// This sets up the event listener on the count button
export function setupCounter(element) {
  element.addEventListener("click", () => countElement$.next(element));
}

// listen to any and all events on the observable
// react by updating the DOM
countElement$.subscribe((element) => {
  console.log(element);
  if (!element) return;

  // get value of data-count and increment and set innerHTML
  const count = element.getAttribute("data-count");
  if (!count) {
    element.setAttribute("data-count", 0);
    element.innerHTML = `count is 0`;
  } else {
    const newCount = (Number(count) ?? 0) + 1;
    element.setAttribute("data-count", newCount);
    element.innerHTML = `count is ${newCount}`;
  }
  const p = document.createElement("p");
  p.innerText = `count was ${count}`;
  document.getElementById("app").appendChild(p);
});
