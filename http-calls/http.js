fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((responseJSON) => console.log(responseJSON))
  .catch((error) => console.error(error))
  .finally(() => console.log("We're done here"));
