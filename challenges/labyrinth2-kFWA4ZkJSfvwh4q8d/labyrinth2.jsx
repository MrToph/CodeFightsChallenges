function TrueValue (num) {
  var val = num;
  num = num + '';
  while(num.length > 1){
    num = num.split('').reduceRight((a, x) => {
      return [a[0] + x * a[1], a[1] + 1];
    }, [0, 1])[0].toString();
  }
  return parseInt(num);
}
