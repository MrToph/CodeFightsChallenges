BinaryPalindrome = (b, n) => {
  var a = (n - 1).toString(2);
  a = a + (a.split('').reverse().join('') + '0'.repeat(b / 2)).substr(b % 2, b / 2);
  a = parseInt(a, 2);
  return a;
}
