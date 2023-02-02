// main.js

// destructure exported object by name
// import { sayHi } from "./utils.js";
import * as utils from "./utils.js";
import { sayBye as sayByeFrom2 } from "./utils2.js";

// Default import
import sdfghjkl from "./utils2.js";

// sayHi(); // Hi! 👋
utils.sayHi(); // Hi! 👋
sayByeFrom2(); // Hi! 👋

console.log(sdfghjkl.name + " has a BMI of " + sdfghjkl.calculateBMI(23, 45));

function helloWorld() {
  console.log("Hello world");
}

const x = helloWorld;
x(); // Hello world
