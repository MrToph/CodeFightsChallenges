primeSquare = n => {
  F = false;
  S = new Array(n + 1).fill(true);
  S[0] = S[1] = F;
  for (i = 2; i <= Math.sqrt(n) | 0; i++) {
    for (k = 2; k * i <= n; k++) {
      S[i * k] = F;
    }
  }
  return S[n] ? n * n : S.reduce((a, x, i) => a + (x ? i * i : i));
}