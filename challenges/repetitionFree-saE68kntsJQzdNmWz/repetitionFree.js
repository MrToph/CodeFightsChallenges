function repetitionFree (n) {
  'use strict';
  var increase = (pos) => { // calculates the number from indices in nums
    if (pos == 0) {
      return indices[pos]++;
    }
    // need to advance smartly
    else {
      let found = false;
      let myOld = indices[pos];
      let current = myOld + 1;
      while(current < 10){ // is current not used by anyone else?
        found = !indices.includes(current);
        if (found) break;
        current++;
      }
      if (found) {
        indices[pos] = current;
        return myOld;
      }else {
        let myOld = indices[pos];
        indices[pos] = 0; // indicate it as available temporarily
        var recNumber = increase(pos - 1);
        // recNumber got free, however there might be a smaller free one in 1 ... recNumber
        let found = false;
        let current = 1;
        while(current < recNumber){ // is current not used by anyone else?
          found = !indices.includes(current);
          if (found) break;
          current++;
        }
        indices[pos] = current;
        return myOld;
      }
    }
  };
  var sum = 0;
  var count = 0;
  // creates the numbers by iteration through all repetition free i-digit numbers
  if (n < 29) {
    for (let i = 1; i <= 9; i++) {
      var indices = Array.from({length: i}, (x, i) => i + 1);
      while(indices[0] < 10){
        var number = indices.reduce((a, x) => a * 10 + x, 0);
        // console.log(indices, number)
        count++;
        if (count <= n) {
          sum += number;
          if (count == n) {
            console.log('count == n', sum);
            if (isRepetitionFree(sum)) return sum;
          }
        }
        else if (number > sum) return number;
        increase(i - 1);
      }
    }
  }
  for (var i = 1; i <= 987654321; i++) {
    if (isRepetitionFree(i)) {
      count++;
      if (count <= n) {
        sum += i;
        if (count == n && isRepetitionFree(sum)) return sum;
      }
      else if (i > sum) return i;
    }
  }
}

function isRepetitionFree (number) {
  // may not contain any 0
  var set = new Set([0]);
  while(number > 0){
    var r = number % 10;
    if (set.has(r)) return false;
    set.add(r);
    number = Math.floor(number / 10);
  }
  return true;
}
