IceRinkPar = C => {
    W = C[0].length
    H = C.length
    I = Infinity
    s = [], e = []
    D = Array.from({length: H}, (v, k) => new Array(W).fill(I)) 
    for(r = 1; r < H - 1; r++){
        for(c = 1; c < W - 1; c++){
            if(C[r][c] == 'o') e = [r,c]
            else if(C[r][c] == '@') s = [r,c]
        }
    }
    S = (a, E) => {
        r = D[a[0]] [a[1]] + 1
        L = 0
        while(1){
            a[0] += E[0]
            a[1] += E[1]
            switch(C[a[0]] [a[1]]){
            case ' ':   
                L = [a[0],a[1]]
                break
            case '#':
                if(L && D[L[0]] [L[1]] == I){
                    D[L[0]] [L[1]] = r
                    F.push(L.slice())
                }
                return
            case '~':
                return
            case '.':
            case 'o':
            case '@':
                if(D[a[0]] [a[1]] == I){
                    D[a[0]] [a[1]] = r
                    F.push(a.slice())
                } 
                return
            }
        }
    }
    F = [s]
    D[s[0]] [s[1]] = 0
    while(F.length > 0){
        Z = F.shift()
        for(i = -1; i <= 1; i++){
            for(j = -1; j <= 1; j++){
                if(i*j == 0 && i != j){
                    S(Z.slice(), [i,j])
                }
            }
        }
    }
    G = D[e[0]][e[1]]
    return G == I ? -1 : G
}