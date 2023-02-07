const user = {
  name: "Tim",
  surname: "Headley",
  age: 30,
};

// const stringifiedUser = `
// {
//   "name": "Tim",
//   "surname": "Headley",
//   "age": 30
// }`;

// console.log(user.name);
// console.log(JSON.stringify(user, null, 2));
// console.log(JSON.parse(stringifiedUser));

const parsedStringifiedUser = JSON.parse(JSON.stringify(user));

console.log(user === parsedStringifiedUser);
