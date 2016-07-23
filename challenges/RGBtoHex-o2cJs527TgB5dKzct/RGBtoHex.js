function RGBtoHex(rgb) {
    var hex = rgb.map(x => ('0' + x.toString(16).toUpperCase()).substr(-2));
    if(hex.reduce((a,x) => a & x[0] == x[1], true)) hex = hex.map(x => x[0])
    return '#' + hex.join('');
}
