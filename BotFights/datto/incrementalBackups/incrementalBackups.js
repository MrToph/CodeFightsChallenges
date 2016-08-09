function incrementalBackups (t, changes) {
  var set = new Set();
  for (var i = 0; i < changes.length; i++) {
    if (changes.some(x => x[0] > t && x[1] === changes[i][1])) set.add(changes[i][1]);
  }
  return [...set].sort((a, b) => a - b);
}
