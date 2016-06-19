function Hamming_Rotate(a, b) {
    "use strict"
    let min = a.length + 1;
    let minIndex = 0;
    for(let i = 0; i < a.length; i++){
        let rot = a.substr(a.length - i) + a.substr(0, a.length - i);
        let tmp = rot.split('').reduce( (a, val, j) => a + ((val != b[j]) ? 1 : 0), 0);
        console.log(rot, a.substr(a.length - i), a.substr(0, a.length - i - 1), tmp);
        if(tmp < min){
            min = tmp;
            minIndex = i;
        }

    }
    return minIndex;
}
