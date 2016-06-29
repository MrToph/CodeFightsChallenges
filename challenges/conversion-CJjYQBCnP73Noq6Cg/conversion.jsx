function conversion (a) {
  a = a.map(x => base26(x));
  l = a.reduce((a, x) => Math.max(a, x.length), 0);
  a = a.map(x => 'a'.repeat(l - x.length) + x);
  return base26(l - 1) + ''.concat(...a);
}

function base26 (x) {
  var s = '';
  while(x > 0) {
    s = String.fromCharCode((x % 26) + 'a'.charCodeAt(0)) + s;
    x = x / 26 | 0;
  }
  return s;
}
