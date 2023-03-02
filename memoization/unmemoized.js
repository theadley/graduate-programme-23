const fib = (n) => {
  if (n <= 1) return 1;
  return fib(n - 1) + fib(n - 2);
};

console.time("UNMEMOIZED");
console.log(fib(10, {}));
console.timeEnd("UNMEMOIZED");
