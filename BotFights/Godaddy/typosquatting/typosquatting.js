function typosquatting (n, domain) {
  var splits = domain.split('.');
  var splitsLength = domain.length - (splits.length - 1);
  var typos = new Set();
  typos.add(splits.join('.')); // we have to remove this later, f.i. when swapping dd in godaddy we get this, but we dont want it
  var maxK = splits.reduce((a, x) => a + Math.floor(x.length / 2), 0);
  if (maxK === 0) return -1;

  var alreadyAdded = new Set(); // dynamic programming array
  var addTypos = (k, i, splits) => {
    var name = splits.join('.');
    var hashName = name + ',' + k + ',' + i;
    if (alreadyAdded.has(hashName)) return;
    if (k === 0) {
      typos.add(name);
      alreadyAdded.add(hashName);
      return;
    }
    var iSplits = 0;
    for (var j = 0; j < splits.length; j++) {
      if (i < splits[j].length) break;
      i = i - (splits[j].length);
      iSplits++;
    }
    // console.log('iSplits', iSplits, 'i', i)
    if (iSplits >= splits.length) return;
    if (i === splits[iSplits].length - 1) return;
    // swap i and i+1
    splits = splits.slice(); // create copy
    var word = splits[iSplits].split('');
    var tmp = word[i + 1];
    word[i + 1] = word[i];
    word[i] = tmp;
    splits[iSplits] = word.join('');
    // console.log(k, i, splits)
    for (var ii = i + 2; ii < splitsLength; ii++) {
      addTypos(k - 1, ii, splits);
    }
    alreadyAdded.add(hashName);
  };
  // console.log('maxK', maxK, splits, splitsLength)
  var k = 1;
  while (k <= maxK) {
    // add current k to typos
    for (var i = 0; i < splitsLength - 1; i++) {
      addTypos(k, i, splits);
    }
    // console.log('k', k, typos, typos.size)
    if (typos.size - 1 > n) { // - 1 because we don't want original name
      k = k - 1;
      break;
    }
    k++;
  }
  return k - 1 === maxK ? -1 : k;
}
