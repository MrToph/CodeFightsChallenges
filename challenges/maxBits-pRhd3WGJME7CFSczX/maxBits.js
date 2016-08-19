maxBits = n => {
  n = n.toString(2);
  a = n.split('').reduce((a, x) => a + ~~x, 0);
  return parseInt('1'.repeat(a) + '0'.repeat(n.length - a), 2);
};
