stepOnCrack2 = (first, n) => {
  var s = ['left', 'right'];
  n = parseInt(n);
  var ans = f(first == s[0] ? 0 : 1, n - 1);
  return s[ans];
};

f = (first, n) => {
  if (n === 0) return first;
  if (n % 2) return 1 - f(first, n - 1);
  else return f(first, n / 2);
};
