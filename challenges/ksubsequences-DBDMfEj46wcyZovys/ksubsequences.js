ksubsequences = (k, n) => {
  C = 0;
  for (i = 0; i < n.length; i++) {
    S = 0;
    for (j = i; j < n.length; j++) {
      S += n[j];
      if (S % k == 0) {
        C++;
      // console.log(i,j,S)
      }
    }
  }
  return C;
}
