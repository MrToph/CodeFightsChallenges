function MissingTerm (a, s) {
  if (s == 0) return a;
  // we need to find the number of summands first, then it's easy
  var n = 0;
  var fullSum = 0;
  while(true){
    if (s <= fullSum) break; // = for a missing
    fullSum += a + n;
    n++;
  }
  n--;
  var res = (n + 1) * a + n * (n + 1) / 2 - s;
  return res;
}
