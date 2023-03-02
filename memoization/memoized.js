/**
 * @param {n} The required n'th fibonacci sequence number
 * @param {memo} The cache
 */
const fib = (n, memo) => {
  memo = memo ?? {};

  if (memo[n]) return memo[n];

  // Recursive exit
  if (n <= 1) return 1;

  // Call fib again, passing memo as parameter
  // Add result to memo and return
  // return (memo[n] = fib(n - 1, memo) + fib(n - 2, memo));
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.time("MEMOIZED");
console.log(fib(362, {}));
console.timeEnd("MEMOIZED");
