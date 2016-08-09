GoldenNumbers = n => {
    A = new Set([1])
     // cannot stop at n, because they are not created in order. Running up to 4570 creates the first 1500 in order
    while(A.size < 4570){ 
        // create a copy
        B = [...A]
        a = f => {
            B.map(x => A.add(f*x))
        }
        a(2)
        a(3)
        a(5)
    }
    return [...A].sort((a,b) => a - b)[n-1]
}