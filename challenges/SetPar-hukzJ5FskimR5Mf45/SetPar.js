SetPar = C => {
    I = Infinity;
    w = C[0].length;
    h = C.length;
    s = [], e = [];
    D = Array.from({length: h}, (v, k) => new Array(w).fill(I)); 
    for(r = 1; r < h - 1; r++){
        for(c = 1; c < w - 1; c++){
            if(C[r][c] == 'o') s = [r,c];
            else if(C[r][c] == '@') e = [r,c];
        }
    }
    Q = [e];
    D[e[0]] [e[1]] = 0;
    S = (a, d) => {
        r = D[a[0]] [a[1]] + 1;
        R = true;
        while(R){
            a[0] += d[0];
            a[1] += d[1];
            switch(C[a[0]] [a[1]]){
            case '#': // water + walls
            case '~':
                R = false;
                break;
            case '*': // sand
            case 'o': // start / end => need to stop
                R = false; // FALL THROUGH for 'sand/start/end'
            case ' ':
                if(D[a[0]] [a[1]] == I){ // not set yet
                    D[a[0]] [a[1]] = r;
                    Q.push(a.slice());
                } 
            }
        }
    }
    while(Q.length > 0){
        E = Q.shift();
        for(i = -1; i <= 1; i++){
            for(j = -1; j <= 1; j++){
                if(i*j == 0 && i != j){ // only the cross, not diagonals
                    S(E.slice(), [i,j])
                }
            }
        }
    }
    return D[s[0]][s[1]];
}



// runs in O(width*height*(width+height))
// function SetPar(course) {
//     // course = course.map(x => x.split(''));// working with arrays instead of strings
//     var abs = Math.abs;
//     var width = course[0].length;
//     var height = course.length;
//     var s = [], e = [];
//     console.log(width, height);
//     var distanceMap = Array.from({length: height}, (v, k) => new Array(width).fill(Infinity)); 
//     for(var r = 1; r < height - 1; r++){
//         for(var c = 1; c < width - 1; c++){
//             if(course[r][c] == 'o') s = [r,c];
//             else if(course[r][c] == '@') e = [r,c];
//         }
//     }
//     var queue = [e];
//     distanceMap[e[0]] [e[1]] = 0;
//     var scan = (a, dir) => {
//         r = distanceMap[a[0]] [a[1]] + 1;
//         var run = true;
//         while(run){
//             a[0] += dir[0];
//             a[1] += dir[1];
//             switch(course[a[0]] [a[1]]){
//                 case ' ':
//                 if(distanceMap[a[0]] [a[1]] == Infinity){ // not set yet
//                     distanceMap[a[0]] [a[1]] = r;
//                     //console.log('pushing', a, 'val',r, distanceMap[a[0]] [a[1]]);
//                     queue.push(a.slice());
//                 } 
//                 break;
//             case '#': // water + walls
//             case '~':
//                 run = false;
//                 break;
//             case '*': // sand
//             case 'o': // start / end => need to stop
//             case '@':
//                 if(distanceMap[a[0]] [a[1]] == Infinity){
//                     distanceMap[a[0]] [a[1]] = r;
//                     queue.push(a.slice());
//                 } 
//                 run = false;
                
//                 break;
//             }
//         }
//     }
//     // a bit like BFS with a frontier but we scan horizontal and vertical lines, starting from the end position
//     // then the invariant is that things we have not scanned yet get the minimum distance
//     while(queue.length > 0){
//         var el = queue.shift();
//         for(var i = -1; i <= 1; i++){
//             for(var j = -1; j <= 1; j++){
//                 if(i*j == 0 && i != j){ // only the cross, not diagonals
//                     //console.log('run', el, [i,j]);
//                     scan(el.slice(), [i,j])
//                 }
//             }
//         }
//     }
//     //console.log('s,e,queue', s, e, queue);
//     //console.log('distanceMap', distanceMap);
//     return distanceMap[s[0]][s[1]];
// }



