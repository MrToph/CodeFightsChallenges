function MatrixPerimeter (matrix) {
  var numRows = matrix.length;
  var numCols = matrix[0].length;
  function getNeighbours (r, c) {
    var n = [];
    for (var i = -1; i <= 1; i++) {
      for (var j = -1; j <= 1; j++) {
        if (i * j != 0 || (i == 0 && j == 0)) continue;
        var r2 = r + i;
        var c2 = c + j;
        if (r2 < 0 || r2 >= numRows || c2 < 0 || c2 >= numCols) continue;
        else n.push([r2, c2]);
      }
    }
    return n;
  }
  var perimeter = 0;
  for (var r = 0; r < numRows; r++) for (var c = 0; c < numCols; c++) {
      if (matrix[r][c]) perimeter += 4 - getNeighbours(r, c).reduce((a, x) => a + (matrix[x[0]][x[1]] ? 1 : 0), 0);
  }
  return perimeter;
}
