function Fact (n) {
  t = 1 << n;
  f = 1;
  for (i = 2; i <= t; i++) {
    f = multSafe(f, i, 1E9 + 7);
  }
  return f;
}

var multSafe = (a, b, mod) => ((b >> 9) * a % mod * 512 + b % 512 * a) % mod;
