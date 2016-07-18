RandomNumbers = m => {
  f1 = 1; f2 = 1;
  p = 1;
  while(f1 != 0 || f2 != 1){ // end when f1 = 0 and f2 = 1
    var tmp = (f2 + f1) % m;
    f1 = f2;
    f2 = tmp;
    p++;
  }
  return (m % 5 == 1 || m % 5 == 4) ? (m - 1) / p : 2 * (m + 1) / p;
};
