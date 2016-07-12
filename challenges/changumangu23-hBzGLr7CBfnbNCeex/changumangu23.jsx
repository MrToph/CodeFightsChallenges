// https://oeis.org/A000931
changumangu23 = n => {
  d = [0, 0, 1, 1];
  for (i = 4; i <= n; i++) {
    d[i] = (d[i - 3] + d[i - 2]) % (1E9 + 7);
  }
  return d[n];
};
