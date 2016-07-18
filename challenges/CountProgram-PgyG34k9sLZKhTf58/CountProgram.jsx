CountProgram = l => {
  r = [3, 1, 6];
  p= 1E9 + 7;
  for (i = 3; i < l + 2; i++) {
    t = 0;
    for (j = 0; j < i; j++) t = (t + m(r[j], r[i - 1 - j], p)) % p;
    r[i] = t;
  }
  return r[l + 1];
};
m = (a, b, q) => ((b >> 9) * a % q * 512 + b % 512 * a) % q;

// https://oeis.org/A025230


// CountProgram = l => {
//   var res = [3, 1, 6, 37];
//   var prime = 1E9 + 7;
//   for (var i = 4; i <= l + 1; i++) {
//     var tmp = 0;
//     for (var j = 0; j < i; j++) {
//       tmp = (tmp + multSafe(res[j], res[i - 1 - j], prime)) % prime;
//     }
//     res[i] = tmp;
//   }
//   return res[l + 1];
// };
// var multSafe = (a, b, q) => ((b >> 9) * a % q * 512 + b % 512 * a) % q;
