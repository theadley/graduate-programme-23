const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(arr.filter((x) => x > 4));
console.log(arr.filter((x) => x % 2 === 0));
console.log(arr.findIndex((x) => x === 8));

// I want an array that is double of every value in the OG array
const doubleArray = [];
for (let i = 0; i < arr.length; i++) {
  doubleArray.push(arr[i] * 2);
}
console.log(arr, doubleArray);

console.log(
  arr,
  arr.map((x) => x * 2)
);

const innerHTML = "<ul>" + arr.map((x) => `<li>${x}</li>`).join("\n") + "</ul>";

const myDiv = document.getElementById("my-div");
myDiv.innerHTML = innerHTML;
