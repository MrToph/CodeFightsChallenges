function stringDivision (s) {
  s = s.split('').map(x => x.charCodeAt(0) - 96).join('').split(''); // last join + split to split 2 digit characters into single ones
  console.log(s);
  var rem = 0; // remainder
  // perform long division by 2
  for (var i = 0; i < s.length; i++) {
    var n = rem * 10 + parseInt(s[i]); // number
    var q = n >> 1; // quotient
    var rem = n % 2; // remainder
    s[i] = q; // store result
  }
  if (s.length > 1 && s[0] == 0) s = s.slice(1);	// corner case s='a' would be [0] here and get removed, but it should stay 0 and get converted to 'a'
  console.log(s);
  s = s.map(x => String.fromCharCode(x + 97)).join('');
  console.log(s);
  return s;
}
