grayCode = n => a(n).map(x => parseInt(x, 2)).join('');

a = n => {
  if (n == 1) return ['0', '1'];
  var arr = a(n - 1);
  return [...arr.map(x => '0' + x), ...arr.reverse().map(x => '1' + x)];
}