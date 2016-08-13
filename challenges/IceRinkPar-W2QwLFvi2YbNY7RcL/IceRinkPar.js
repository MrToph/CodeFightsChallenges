function IceRinkPar (course) {
  var width = course[0].length;
  var height = course.length;
  var s = [], e = [];
  console.log(width, height);
  var distanceMap = Array.from({length: height}, (v, k) => new Array(width).fill(Infinity));
  for (var r = 1; r < height - 1; r++) {
    for (var c = 1; c < width - 1; c++) {
      if (course[r][c] == 'o') e = [r, c];
      else if (course[r][c] == '@') s = [r, c];
    }
  }
  var scan = (a, dir) => {
    r = distanceMap[a[0]][a[1]] + 1;
    var lastIce = null;
    while(true){
      a[0] += dir[0];
      a[1] += dir[1];
      switch (course[a[0]][a[1]]) {
        case ' ':
          lastIce = [a[0], a[1]];
          break;
        case '#': // walls
          if (lastIce != null && distanceMap[lastIce[0]][lastIce[1]] == Infinity) { // not set yet
            distanceMap[lastIce[0]][lastIce[1]] = r;
            // console.log('pushing', a, 'val',r, distanceMap[a[0]] [a[1]])
            queue.push(lastIce.slice());
          }
          return;
        case '~': // water
          return;
        case '.': // sand
        case 'o': // end / start => need to stop
        case '@':
          if (distanceMap[a[0]][a[1]] == Infinity) {
            distanceMap[a[0]][a[1]] = r;
            queue.push(a.slice());
          }
          return;
      }
    }
  };
  // a bit like BFS with a frontier but we scan horizontal and vertical lines, starting from the start position
  // then the invariant is that things we have not scanned yet get the minimum distance
  var queue = [s];
  distanceMap[s[0]][s[1]] = 0;
  while(queue.length > 0){
    var el = queue.shift();
    for (var i = -1; i <= 1; i++) {
      for (var j = -1; j <= 1; j++) {
        if (i * j == 0 && i != j) { // only the cross, not diagonals
          // console.log('run', el, [i,j])
          scan(el.slice(), [i, j]);
        }
      }
    }
  }
  // console.log('s,e,queue', s, e, queue)
  // console.log('distanceMap', distanceMap)
  var dist = distanceMap[e[0]][e[1]];
  return dist == Infinity ? -1 : dist;
}
