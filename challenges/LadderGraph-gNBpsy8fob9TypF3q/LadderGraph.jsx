function LadderGraph (N) {
  if (N == 1) return 1;
  const prime = 1E9 + 7;
  let matrix = [[0, 1], [-2, 5]];
  let [[a, b], [c, d]] = pow(matrix, (N - 1) % (prime - 1), prime); // eulers quotient function we can reduce the mod
  let start = [1, 5];
  // console.log('a,b ', a, b)
  let answer = (((a * start[0] % prime) + (b * start[1] % prime)) + prime) % prime;
  return answer;
}

function pow (matrix, exp, mod) {
  if (exp === 1) return matrix;
  if (exp % 2 === 0) {
    let m = pow(matrix, exp / 2, mod);
    return mult(m, m, mod);
  } else {
    return mult(matrix, pow(matrix, exp - 1, mod), mod);
  }
}

function mult (a, b, mod) { // a = k x m --- b = m x n
  let k = a.length, m = a[0].length, n = b[0].length;
  // c = k x n
  let c = new Array(k);
  for (let i = 0; i < k; i++) {
    c[i] = new Array(n).fill(0);
    for (let j = 0; j < n; j++) {
      for (let s = 0; s < m; s++) {
        c[i][j] = (c[i][j] + multSafe(a[i][s].mod(mod), b[s][j].mod(mod), mod)).mod(mod);
      // console.log(i, j, s, 'a[i][s]', a[i][s], 'b[s][j]', b[s][j], 'c[i][j]', c[i][j], 'multSafe:', multSafe(a[i][s].mod(mod), b[s][j].mod(mod), mod))
      }
    }
  }
  // console.log(c)
  return c;
}

// mod > a, b >= 0, otherwise >> 9 makes mistakes
// for mod = 10e9+7 = 1.11011 * 2^29. Squaring would get us to 2^58 > (2^53 - 1) = MAX_SAFE_INTEGER
// But doing 2^29 * 2^(29-9) = 2^49 which fits
let multSafe = (a, b, mod) => ((b >> 9) * a % mod * 512 + b % 512 * a) % mod;

Number.prototype.mod = function (n) {
  return ((this % n) + n) % n;
};

for (let i = 1; i <= 9; i++) {
  console.log(LadderGraph(i));
}
console.log(LadderGraph(10)); // 946025
console.log(LadderGraph(1000)); // 884272384
console.log(LadderGraph(123456)); // 280556729

// https://oeis.org/A107839
