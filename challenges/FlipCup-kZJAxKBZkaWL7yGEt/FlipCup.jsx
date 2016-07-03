function FlipCup (n, f) {
  if (f == 0 || n % f > 0) return '-1';
  return Math.ceil(n / f).toString();
}
