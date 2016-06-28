// https://www.cs.bham.ac.uk/~mdr/teaching/modules04/java2/TilesSolvability.html
function fifteen_game (b) {
  var a = [].concat(...b);
  var inversions = 0;
  var row0 = 0;
  for (var i = 0; i < a.length; i++) {
    for (var j = i + 1; j < a.length; j++) {
      if (a[j] === 0) {
        row0 = Math.floor(j / 4);
        continue;
      }
      inversions += (a[i] > a[j]) ? 1 : 0;
    }
  }
  console.log(inversions, row0);
  return (1 - row0 % 2) === inversions % 2;
}
