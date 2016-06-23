/*

THERE IS STILL A BUG IN THE multSafe

 */

function LadderGraph (N) {
  const prime = 1000000007;
  // let d = []
  // d[0] = 1; d[1] = 5
  // for (let i = 2; i < N; i++) {
  //   d[i] = (((5 * d[i - 1]) % prime - (2 * d[i - 2]) % prime) + prime) % prime
  //   console.log(i, d[i] % prime, d[i])
  // }
  let matrix = [[0, 1], [-2, 5]];
  let [[a, b], [c, d]] = pow(matrix, (N - 1) % (prime - 1), prime); // eulers quotient function we can reduce the mod
  let start = [1, 5];
  //console.log('a,b ' , a, b);
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
        c[i][j] = (c[i][j] + multSafe(a[i][s], b[s][j], mod).mod(mod)).mod(mod);
        //console.log(i, j, s, 'a[i][s]', a[i][s], 'b[s][j]', b[s][j], 'c[i][j]', c[i][j]);
      }
    }
  }
  //console.log(c);
  return c;
}

const MAX_SAFE_INTEGER_SQR = Math.sqrt(Number.MAX_SAFE_INTEGER);	// 9.5 * 10^7
function multSafe (a, b, mod) { // a,b <= 10^9 + 7^, 	mod = 10^9+7
  if (a > MAX_SAFE_INTEGER_SQR && b > MAX_SAFE_INTEGER_SQR) {
    let b_sqr = Math.floor(Math.sqrt(b));
    let remainder = b - b_sqr * b_sqr;
    let tmp = a * b_sqr % mod;	// mod will apply here always, because a * b_sqrt > 10^12, and prime is 10^9+7
    return remainder * a + tmp*b_sqr;
  }
  return a * b;
}

Number.prototype.mod = function (n) {
  return ((this % n) + n) % n;
};

for (let i = 5; i <= 1000; i++) {
  console.log(LadderGraph(i)); // 946025
}
console.log(Number.MAX_SAFE_INTEGER); // 9 * 10^15 = 2^53 - 1
console.log(LadderGraph(10)) // 946025
console.log(LadderGraph(1000)) // 884272384
console.log(LadderGraph(123456)) // 280556729

// https://oeis.org/A107839
