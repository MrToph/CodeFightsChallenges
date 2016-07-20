var powerset = (set) => {
    if(set.length == 0) return [[]];
    else{
        var el = set.pop();
        var rek = powerset(set);
        var map = rek.map(x => {var ret = x.slice(); ret.push(el); return ret}); // we may not modify the element of rek, so we need to create a copy with slice
        // and push unfortunately returns the index of the new element
        return rek.concat(map);
    }
}

console.log('empty set', powerset([]));
console.log('finished', powerset([1]));
console.log(powerset([1,2,3]));
window.powerset = powerset;
