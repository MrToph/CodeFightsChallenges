function firstone (s) {
  s = s.split('');
  var m = new Map();
  s.map(x => {
    m.has(x) ? m.set(x, m.get(x) + 1) : m.set(x, 1);
  });
  // return first char that appears only once in the string
  for (var i = 0; i < s.length; i++) {
    if (m.get(s[i]) === 1) return s[i];
  }
  return '-1';
}
