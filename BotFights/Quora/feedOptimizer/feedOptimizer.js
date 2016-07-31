function feedOptimizer(span, h, events) {
    var stories = events.filter(x => x.length == 3).map((x,i) => [...x,i+1]); // append id of stories
    var reloads = events.filter(x => x.length == 1);
    // have to solve knapsack problem ...
    var knapSack = (relevantStories) => {
        var N = relevantStories.length;
        var R = Array.from({length: N + 1}, 
                         (v, ind) => new Array(h+1).fill(0));
        for(var i = 1; i <= N; i++){
            for(var j = 1; j <= h; j++){
                var weight = relevantStories[i-1][2];
                var score = relevantStories[i-1][1];
                if(weight > j){ // new height more than current height limit
                    R[i][j] = R[i-1][j];
                }
                else {
                    R[i][j] = Math.max(R[i-1][j], R[i-1][j - weight] + score);
                }
            }
        }
        // console.log('R', R);
        // backtrack to get the actual indices
        var items = [];
        var i = N;
        var j = h;
        while(i > 0){
            var weight = relevantStories[i-1][2];
            var score = relevantStories[i-1][1];
            if(R[i][j] - R[i - 1][j - weight] == score){ // item in knapsack
                i--;
                j -= weight;
                items.push(relevantStories[i][3]); // items id
            }
            else{
                i--;
            }
        }
        return [R[N][h], ...items.sort()];
    }
    
    // can cache some knapsack computation in dyn
    var dyn = new Map();
    var compute = (relevantStories) => {
        var hashName = relevantStories.join(',');
        if(!dyn.has(hashName)){
            dyn.set(hashName, knapSack(relevantStories));
        }
        return dyn.get(hashName)
    }
    var ans = [];
    for(var i = 0; i < reloads.length; i++){
        var relevantStories = stories.filter(x => {
            var time = reloads[i] - x[0];
            return time >= 0 && time <= span;
        });
        console.log('reload', reloads[i], 'stories', relevantStories);
        console.log('knapSack', compute(relevantStories));
        ans.push(compute(relevantStories));
    }
    return ans;
}
