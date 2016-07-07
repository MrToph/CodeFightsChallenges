findBiSlice = a => {
M = Math.max;
  o = a[0];
  n = a[0]; // 0 does not appear
  p = 0;
  q = 0;
  f = 0;
  y = 0;
  for (i = 0; i < a.length; i++) {
    if (a[i] != n && a[i] != o) {
      y = M(y, i - f);
      f = q;
    }
    if (a[i] != n) {
      //console.log('change at:', i, 'invalid number', o, 'new numbers:', n, a[i]);
      o = n;
      n = a[i];
      p = q;
      q = i;
    }
  }
  y = M(y, i - f);
  return y;
}

function findBiSlice (arr) {
  var oldest = arr[0];
  var newest = arr[0]; // 0 does not appear
  var oi = 0;
  var ni = 0;
  var from = 0;
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] != newest && arr[i] != oldest) {
      var dist = i - from;
      if (dist > max) max = dist;
      from = ni;
    }
    if (arr[i] != newest) {
      //console.log('change at:', i, 'invalid number', oldest, 'new numbers:', newest, arr[i]);
      oldest = newest;
      newest = arr[i];
      oi = ni;
      ni = i;
    }
  }
  max = Math.max(max, i - from);
  return max;
}
