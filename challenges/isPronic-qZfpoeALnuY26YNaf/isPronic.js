S = Math.sqrt
isPronic = n => (S(n) | 0) * ((S(n) | 0) + 1) == n


// function isPronic(n) {
//     var sqr = Math.floor(Math.sqrt(n));
//     return sqr * (sqr + 1) == n;
// }
