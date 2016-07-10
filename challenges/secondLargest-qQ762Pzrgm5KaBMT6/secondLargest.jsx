function secondLargest (n) {
  var max = n;
  var secondMax = 1;
  while(n > 1){
    if (n % 2) n = 3 * n + 1;
    else n = n / 2;
    if (n > max) {
      secondMax = max;
      max = n;
    }
    else if (n > secondMax)
      secondMax = n;
  }
  return secondMax;
}
