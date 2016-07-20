function reverseHexadecimal (revhex) {
  revhex = revhex.split('');
  var sum = 0;
  var base = 1;
  for (var i = revhex.length - 1; i >= 0; i--) {
    sum += (15 - parseInt(revhex[i], 16)) * base;
    base *= 16;
  }
  return sum;
}
