function FactorialSum (n) {
  var c = 0;
  n = f(n);
  while(n > 0){
    c += n % 10;
    n = Math.floor(n / 10);
  }
  return c;
}

f = x => x === 1 ? 1 : x * f(x - 1);
