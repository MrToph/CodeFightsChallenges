GetDuplicates = L => [...new Set(L.filter((x,i) => L.includes(x,i+1)))]

//GetDuplicates = L => [...new Set(L.filter((x,i) => L.some((y,j) => x==y & j>i)))]
