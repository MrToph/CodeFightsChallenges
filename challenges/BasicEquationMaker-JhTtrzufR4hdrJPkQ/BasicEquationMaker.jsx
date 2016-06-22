function BasicEquationMaker (rom) {
  var opBreak = 1;
  var equalBreak = 2;
  for (equalBreak = 2; equalBreak < rom.length; equalBreak++) {
    for (opBreak = 1; opBreak < equalBreak; opBreak++) {
      op1s = rom.substring(0, opBreak);
      op2s = rom.substring(opBreak, equalBreak);
      eqs = rom.substring(equalBreak);
      op1 = parseInt(op1s);
      op2 = parseInt(op2s);
      eq = parseInt(eqs);
      console.log(op1, op2, eq, op1s);
      if (op1 + op2 == eq)
        return op1s + '+' + op2s + '=' + eqs;
      else if (op1 - op2 == eq)
        return op1s + '-' + op2s + '=' + eqs;
      else if (op1 * op2 == eq)
        return op1s + '*' + op2s + '=' + eqs;
      else if (op1 / op2 == eq)
        return op1s + '/' + op2s + '=' + eqs;
      else if (op1 % op2 == eq)
        return op1s + '%' + op2s + '=' + eqs;
    }
  }
  return 'Not possible';
}
