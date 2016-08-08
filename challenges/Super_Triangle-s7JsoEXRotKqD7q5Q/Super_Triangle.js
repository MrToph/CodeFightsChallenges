function Super_Triangle (c) {
  L = c.length;
  c.sort((a, b) => (a[0] - b[0]) * 400 + (a[1] - b[1]));
  count = 0;
  for (var i = 0; i < L;) {
    var r = c[i][0];
    // center of circumcircle = (0,0) => they all must have the same radius
    // and then problem is invariant under radius
    var sameRadius = c.filter(a => a[0] == r).map(x => x[1]); // take the ones with same radius and store angles only
    var angles = new Array(360 + 240).fill(false); // 240 overflow buffer
    for (var j = 0; j < sameRadius.length; j++) {
      angles[sameRadius[j]] = true;
    }
    for (var j = 0; j < sameRadius.length; j++) {
      var a = sameRadius[j];
      // equilateral
      if (angles[a + 120] && angles[a + 240]) count++;
      // right triangles
      if (angles[a + 180]) {
        count += sameRadius.length - 2; // all other points can be used to form a right triangle. Thales
      }
    }
    i += sameRadius.length;
  }
  return count;
}
