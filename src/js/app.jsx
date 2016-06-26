function GalaxyAZ(number, base) {
    base = 26 - base.charCodeAt(0) + 'A'.charCodeAt(0);
    var a = '';
    while(number > 0){
        var last = number % base;
        a = (last > 9 ? String.fromCharCode('Z'.charCodeAt(0) - (last - 10)) : last.toString()) + a
        number = Math.floor(number / base);
    }
    return a;
}
