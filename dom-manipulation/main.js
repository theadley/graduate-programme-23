import "./style.css";

const heading = document.createElement("h1");
heading.innerText = "Sup, grads";
heading.className = "grads-h1";

document.body.append(heading);

const myStyles = document.createElement("style");
myStyles.innerText = ".grads-h1{color:green}";

document.body.append(myStyles);

const listItemCollection = document.querySelectorAll("li");
const itemToDelete = listItemCollection[listItemCollection.length - 1];
console.log(itemToDelete.innerText);
itemToDelete.remove();

function buttonClicked(event) {
  console.log(event.target.id);
  event.target.innerText = "OWW";
  event.target.style["background-color"] = "red";
  event.target.style.color = "white";
  event.target.style.cursor = "not-allowed";
  event.target.disabled = true;
}

const myButton = document.createElement("button");
myButton.innerText = "Click Me";
myButton.id = "mb-1";
myButton.addEventListener("click", buttonClicked);

const myButton2 = document.createElement("button");
myButton2.innerText = "Click Me 2";
myButton2.id = "mb-2";
myButton2.addEventListener("click", buttonClicked);

document.body.appendChild(myButton);
document.body.appendChild(myButton2);
