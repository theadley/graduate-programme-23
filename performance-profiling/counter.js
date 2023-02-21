// function sleepMainThread(milliseconds) {
//   const stopSleepingTimeMS = new Date().getTime() + milliseconds;
//   while (new Date().getTime() <= stopSleepingTimeMS) {} // shhhhhhhhhhh
// }

export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    // sleepMainThread(200);
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}
