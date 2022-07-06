const fib = function (n) {
  let a = 0, b = 1, c;
  while (n--) {
    c = a + b;
    a = b;
    b = c;
  }
  return a;
};