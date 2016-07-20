function SimpleSecretMessage (code) {
  var ans = '';
  var char = code[0].charCodeAt(0);
  for (var i = 1; i < code.length; i++) {
    var cur = code[i];
    if (cur == '-') {
      char--;
    }
    else if (cur == '+') {
      char++;
    }else {
      ans += String.fromCharCode(char);
      char = cur.charCodeAt(0);
    }
  }
  return ans + String.fromCharCode(char);
}
