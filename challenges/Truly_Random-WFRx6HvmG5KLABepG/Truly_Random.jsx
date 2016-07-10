Truly_Random = n => {
  // MAX_SAFE_INTEGER 9007199254740991 = 9 * 10^15
  // and for n = 17 we get 16 * 10^15 which doesn't work anymore.
  if (n === 17) return '16888888888888910';
  var sum = 8; // n = 2
  for (var i = 2; i < n; i++) {
    sum += (i + 1) * 9 * Math.pow(10, i - 2) + 1;
  }
  return sum.toString();
};

My solution sums up all partial solutions for n-digits
You can look at two consecutive n digit numbers and how many possibilities there are to match 3 consecutive digits, f.i., n = 4 as
yxxx yxxx where y in [1,...,9] and x in [0,...,9]
|_|		9*10 (1110, 1111, 1112, 1113, .. 1119, 2220, .. 2229, ... 9990, 9999)
 |_|	9*10 (1000, 1111, 1222, .. 1999, 2000, 2111, .. 2999, ... 9000, .. 9999)
  |__|	10*9 (1011, 1012, 1111 1112, 1211 1212, 1311 1312, .., 1911 1912,
  				2022 2023, 2122 2123, .., 2922 2923..., 8088 8089, 8188 8189, .., 8988 8989)
   |__| 10*9 (1101 1102, 1111 1112, 1121 1122, 1131 1132, .., 1191 1192, 2202 2203, 2212 2213, .. 2292 2293,
   				..., 8808 8809, 8818 8819, 8828 8829, .., 8898 8899)
We stop shifting the mask |_| here, because if we moved it one to the right again, we end up with the first case again.

Special case is: 10000, for which we then get +2, but we subtract 1 because 1000 was already included in previous sum and counted twice here.
=> +360 +1 = +361
The pattern can then be generalized, because for n digits you have to look at n different 3-digit substring mask |_| positions:
in general: n*9*10^(n-3) + 1
