// http://www.wolframalpha.com/input/?i=solve+m*(m%2B1)%2F2+%3D+n-2+for+m
Bottles_2 = n => Math.ceil(0.5 * (Math.sqrt(8*n - 15) -1))

// function Bottles_2(n) {
//     var sum = 2; // = 2 because, it cannot be top and we know that it exists, i.e., if lvl 1 breaks => edge level is lvl 0
//     var i = 0;
//     while(sum < n){
//         sum += ++i;
//     }
//     return i;
// }
