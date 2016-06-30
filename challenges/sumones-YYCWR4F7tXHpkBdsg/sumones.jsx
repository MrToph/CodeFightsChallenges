function sumones (n) {
  return n + n.toString(2).split('').reduce((a, x) => a = a + (x == '1' ? 1 : 0), 0);
}
