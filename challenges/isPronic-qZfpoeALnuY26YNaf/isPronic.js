S = Math.sqrt
isPronic = n => {
    var sqr = S(n) | 0;
    return sqr * (sqr + 1) == n;
}


// function isPronic(n) {
//     var sqr = Math.floor(Math.sqrt(n));
//     return sqr * (sqr + 1) == n;
// }
