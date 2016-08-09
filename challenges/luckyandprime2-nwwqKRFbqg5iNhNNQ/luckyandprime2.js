function luckyandprime2(l, r, K) {
    var sieve = new Array(r+1).fill(true);
    sieve[0] = sieve[1] = false;
    var num = new Array(r+1).fill(0);
    for(var i = 2; i <= r; i++){
        if(!sieve[i]) continue; // not a prime => skip
        for (var k = 1; k * i <= r; k++){
            num[k*i]++;
            if(k > 1) sieve[k*i] = false;
        }
    }
    return num.slice(l).filter(x => x === K).length;
}
