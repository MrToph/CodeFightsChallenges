helptoclone = A => {
  e = 0;
  o = 0;
  A.forEach(x => {
    e += 1 - x % 2;
    o += x % 2;
  });
  return e * o + e-- * e / 2;
};

function helptoclone (A) {
  var numEven = 0;
  var numOdd = 0;
  A.forEach(x => {
    numEven += 1 - x % 2;
    numOdd += x % 2;
  });
  // multiplying any odd number with any even gives us even. 
  // Any even with any other even (choose all 2 element sets out of the even numbers) gives even again
  return numEven * numOdd + numEven * (numEven - 1) / 2;
}
