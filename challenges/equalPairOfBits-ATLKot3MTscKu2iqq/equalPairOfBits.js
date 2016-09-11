equalPairOfBits = r = (n, m) => (n & 1) === (m & 1) ? 1 : r(n >> 1, m >> 1) << 1

equalPairOfBits = (n, m) => {
  var count = 0
  while(1){
    if ((n & 1) === (m & 1)) return Math.pow(2, count)
    n >>= 1
    m >>= 1
    count++
  }
}
