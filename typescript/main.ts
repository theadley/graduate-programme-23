// We remove comments
console.log('Hello, Tim');

let x = 5;

if (x > 3) {
  var isDisgusting;
}

console.log(x, isDisgusting);


function unreachableContent() {
  let a = 5;
  return a;

  if (a < 10) {
    console.log(a);
  }
}
function myCallback(event: Event, statusCode: number): void {
  console.log((event as MouseEvent).offsetX)
}

document.getElementById('my-input-box')
  .addEventListener('click', (event) => myCallback(event, 200))