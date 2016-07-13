function TrueValue(num) {
    var val = num;
    num = num + '';
    while(num.length > 1){
        num = num.split('').reduceRight((a,x) => {
            console.log(a,x);
            a = [a[0] + x * a[1], a[1] +1];
        }, [0, 1]);
        console.log(num);
        num = 'a';
    }
    return parseInt(num);
}


console.log(TrueValue(123));
