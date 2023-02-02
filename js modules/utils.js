// utility.js -> A Module

const sayHi = () => console.log("Hi! 👋");
// const sayBye = () => console.log("Bye 🥲");

function sayBye() {
  console.log("Bye 🥲");
  return 2;
}

const age = 30;

export { sayHi, sayBye, age }; // shorthand for {sayHi: sayHi}
