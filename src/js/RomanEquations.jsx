function RomanEquations(rom) {
    function deromanize (str) {
	var	str = str.toUpperCase(),
		validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/,
		token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,
		key = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
		num = 0, m;
	if (!(str && validator.test(str)))
		return false;
	while (m = token.exec(str))
		num += key[m[0]];
	return num;
}
    var opBreak = 1;
    var equalBreak = 2;
    for(equalBreak = 2; equalBreak < rom.length; equalBreak++){
        for(opBreak = 1; opBreak < equalBreak; opBreak++){
            op1s = rom.substring(0, opBreak)
            op2s = rom.substring(opBreak, equalBreak)
            eqs = rom.substring(equalBreak)
            op1 = deromanize(op1s);
            op2 = deromanize(op2s);
            eq = deromanize(eqs);
            if(!op1 || !op2 || !eq) continue;
            console.log(op1, op2, eq, op1s);
            if(op1+op2 ==eq)
                return op1s + '+' + op2s + '=' + eqs
            else if(op1-op2 == eq)
                return op1s + '-' + op2s + '=' + eqs
            else if(op1*op2 == eq)
                return op1s + '*' + op2s + '=' + eqs
            else if(op1/op2 == eq)
                return op1s + '/' + op2s + '=' + eqs
            else if(op1%op2 == eq)
                return op1s + '%' + op2s + '=' + eqs
        }
    }
    return 'not possible';
}
