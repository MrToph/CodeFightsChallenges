function NarcissisticNumber (a, b) {
  var n = []; // holds the narcissistic numbers
  for (var i = a; i <= b; i++) {
    var l = i.toString().length;
    var x = i; // store i temporarily in x
    var sum = 0;
    while(x > 0){
      sum += Math.pow((x % 10), l);
      x = Math.floor(x / 10);
    }
    if (sum === i) n.push(i);
  }
  return n;
}
