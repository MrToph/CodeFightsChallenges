function nextNumber (N) {
  if (N == 0) return 0;
  var i = N + 1;
  N = N.toString(2).split('').reduce((a, x) => a + (x == '1' ? 1 : 0), 0);

  while(true){
    var s = i.toString(2).split('').reduce((a, x) => a + (x == '1' ? 1 : 0), 0);
    if (s == N) return i;
    i++;
  }
}
