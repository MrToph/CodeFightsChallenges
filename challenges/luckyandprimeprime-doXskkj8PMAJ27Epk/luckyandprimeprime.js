function luckyandprimeprime (l, r) {
  var primes = new Array(r + 1).fill(true);
  primes[0] = primes[1] = false;
  // erastothenes
  for (var i = 2; i <= Math.ceil(Math.sqrt(r)); i++) {
    for (var k = 2; k * i < primes.length; k++) {
      primes[i * k] = false;
    }
  }
  var primeprime = new Array(r + 1).fill(false);
  var numPrimes = 0; // number of primes in [1,i]
  for (var i = 1; i <= r; i++) {
    if (primes[i]) numPrimes++;
    if (primes[numPrimes]) primeprime[i] = true;
  }
  var numPrimePrimes = 0;
  for (var i = l; i <= r; i++) {
    if (primeprime[i]) numPrimePrimes++;
  }
  return numPrimePrimes;
}
