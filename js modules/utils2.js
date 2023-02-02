// utility.js -> A Module

const sayHi = () => console.log("Hi! 👋");
// const sayBye = () => console.log("Bye 🥲");

function sayBye() {
  console.log("Bye 🥲");
  return 2;
}

const age = 30;

const person = {
  name: "Tim",
  age: 30,
  calculateBMI: (height, weight) => height * 0.5 * weight,
};

export default person;
export { sayBye, age }; // shorthand for {sayHi: sayHi}
