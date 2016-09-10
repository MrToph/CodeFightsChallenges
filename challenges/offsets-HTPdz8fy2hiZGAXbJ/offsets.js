function offsets(chain) {
    chain = chain.split('').map(x => parseInt(x));
    var o = chain[0];
    for(var i = 2; i < chain.length; i++) o += chain[i] - chain[i-1];
    return o;
}
