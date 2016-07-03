function Consensus(c) {
    if(c[0].length == 0) return 1;
    b = c.map(x => x.substring(0,1))
    status = '?'
    for(var i = 0; i < b.length; i++){
        if(b[i] == '?') continue;
        else{
            if(status == '?') status = b[i];
            else if(status == b[i]) continue;
            else{
                status = 'x';
                break;
            }
        }
    }
    val = 0;
    if(status == '?') val = 2;
    else if(status == 'x') val = 0;
    else val = 1;
    return val * Consensus(c.map(x => x.substring(1)));
}
