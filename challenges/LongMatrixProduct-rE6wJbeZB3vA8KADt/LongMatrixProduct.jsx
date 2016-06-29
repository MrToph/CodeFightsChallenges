LongMatrixProduct = (m, n) => {
  l = m.length;
  d = new Array(l).fill(0).map(x => new Array(l));
  r = (s, e) => {
    if (d[s][e] !== undefined) {
      return d[s][e];
    }
    if (e - s === 0) {
      d[s][e] = 0;
      return d[s][e];
    }
    v = Infinity;
    for (var i = s; i < e; i++) {
      v = Math.min(v, r(s, i) + r(i + 1, e) + m[s] * n[i] * n[e]);
    }
    d[s][e] = v;
    return d[s][e];
  };
  // console.log(d)
  return r(0, l - 1);
};

// function LongMatrixProduct (m, n) {
//   var l = m.length;
//   var d = new Array(l).fill(0).map(x => new Array(l));
//   function rec (start, end) {
//     if (d[start][end] !== undefined) {
//       return d[start][end];
//     }
//     if (end - start === 0) {
//       d[start][end] = 0;
//       return d[start][end];
//     }
//     var min = Infinity;
//     for (var i = start; i < end; i++) {
//       min = Math.min(min, rec(start, i) + rec(i + 1, end) + m[start] * n[i] * n[end]);
//     }
//     d[start][end] = min;
//     return d[start][end];
//   }
//   return rec(0, l - 1);
// }