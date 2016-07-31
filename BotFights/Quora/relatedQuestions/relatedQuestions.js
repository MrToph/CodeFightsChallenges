function relatedQuestions(n, t, edges) {
    var d = [];
    var dyn = new Map();
    var compute = (parent, node, visited) => {
        if(visited[node]) return 0;
        var hashName = parent + ',' + node;
        if(dyn.has(hashName)) return dyn.get(hashName);
        visited[node] = true; // no need to slice, beacuse of graph is a tree
        var neighbours = [];
        for(var j = 0; j < edges.length; j++){
            if(edges[j][0] == node && !visited[edges[j][1]]) neighbours.push(edges[j][1])
            else if(edges[j][1] == node && !visited[edges[j][0]]) neighbours.push(edges[j][0])
        }
        var time = t[node];
        for(var j = 0; j < neighbours.length; j++){
            time += (1/neighbours.length) * compute(node, neighbours[j], visited);
        }
        //console.log('Setting ', hashName, time);
        dyn.set(hashName, time);
        return dyn.get(hashName);
    }
    for(var i = 0; i < n; i++){
        var visited = new Array(n).fill(false);
        d[i] = compute(i, i, visited);
    }
    var min = Math.min(...d);
    return d.indexOf(min);
}

