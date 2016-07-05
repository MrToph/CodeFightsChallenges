function FibonacciSort (s) {
  if (s.length <= 4) return s.sort(); // 0, 1, 1, 2, 3
  var f = [];
  f[0] = 0;
  f[1] = 1; // no duplicate 1
  f[2] = 2;
  var i = 3;
  while (f[i - 1] < s.length) {
    f[i] = f[i - 1] + f[i - 2];
    i++;
  }
  f.pop();
  var ss = [];
  f.forEach(x => ss.push(s[x]));
  ss.sort((a, b) => a - b);
  for (i = 0; i < ss.length; i++) {
    s[f[i]] = ss[i];
  }
  return s;
}
