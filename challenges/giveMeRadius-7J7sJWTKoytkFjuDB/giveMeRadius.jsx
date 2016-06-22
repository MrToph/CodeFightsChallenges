function giveMeRadius (matrix) {
  var d = Array.from({length: matrix.length},
    (val, i) => matrix[i].slice().map(
      (val, j) => i == j ? 0 : val == -1 ? Infinity : val));
  for (var k = 0; k < matrix.length; k++) {
    for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < matrix.length; j++) {
        d[i][j] = Math.min(d[i][j], d[i][k] + d[k][j]);
      }
    }
  }
  console.log(d);

  var min = Infinity;
  for (var i = 1; i < matrix.length; i++) {
    var eccentricity = 0;
    for (var j = 0; j < matrix.length; j++) {
      eccentricity = Math.max(eccentricity, d[i][j]);
    }
    min = Math.min(min, eccentricity);
  }
  return min;
}
