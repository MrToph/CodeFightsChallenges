function numberGame(n, d) {
    var memo = [];
    function recurse(n, div){
        var ns = n.toString();
        var curLvl = d - div;
        for(var i = 0; i < ns.length; i++){
            n = removeAndParse(ns, i);
            if(!n) continue;
            // still have a number left and div == 1 => base case
            if(div == 1) return d-div+1;
            // otherwise divisible by the number we want?
            if(memo[n] == undefined){
                memo[n] = [];
            }
            var alreadyChecked = memo[n][div];
            if(alreadyChecked) continue;
            if(n % div == 0){
                var recVal =  recurse(n, div-1);
                curLvl = Math.max(curLvl, recVal);
            }
            // add to already checked
            memo[n][div] = true;
        }
        return curLvl;
    }
    return recurse(n, d, 0);
}

// removes character at i and parses string
function removeAndParse(s, i){
    return parseInt(s.slice(0, i) + s.slice(i+1));
}