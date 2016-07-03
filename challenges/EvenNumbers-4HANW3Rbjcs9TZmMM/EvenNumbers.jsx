EvenNumbers = (N, P) => {n = 1 << N, y = P/n | 0; return y <= 0 ? -1 : n*(y - 1 + y%2)}

// function EvenNumbers(N, P) {
//     var n = 1 << N;
//     var y = P/n | 0;
//     if(y <= 0) return -1;
//     while(y % 2 == 0) y--;
//     return n*y;
// }