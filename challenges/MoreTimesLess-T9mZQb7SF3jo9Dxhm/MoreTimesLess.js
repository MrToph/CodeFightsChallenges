MoreTimesLess = n => {
  D = [];
  for (i = 1; i < Math.sqrt(n); i++) {
    if (!(n % i)) D.push(i);
  }
  return D.reduce((a, x) => a + (x % 2 == (n / x) % 2), 0);
};
// http://math.stackexchange.com/a/934145
// n = a^2 - b^2 = (a-b) * (a+b) which means n divides (a-b) and (a+b) => get all prime factors
// get divisor of n = p_1 * ... * p_n
// pick some p * q = n
// b = (p - q)/2; a = q + b = (p + q)/2
// Example: 45 = 45,15,9, 5,3,1
// p and q have different parity => cannot be written as n = a^2 - b^2
