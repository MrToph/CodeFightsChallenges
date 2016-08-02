// fails a hidden test
// longest common subsequence
function theFile(a, b) {
    var m = a.length;
    var n = b.length;
    var C = Array.from({length: m+1}, (x,i) => new Array(n+1).fill(0))
    for(var i = 1; i <= m; i++){
        for(var j = 1; j <= n; j++){
            if(a[i-1] == b[j-1]) C[i][j] = C[i-1][j-1] + 1;
            else C[i][j] = Math.max(C[i][j-1], C[i-1][j])
        }
    }
    function backtrack(i, j){
        if(i == 0 || j == 0) return "";
        else if(a[i-1] == b[j-1]) return backtrack(i-1,j-1) + a[i-1];
        else{
            if(C[i][j-1] > C[i-1][j]) return backtrack(i, j-1);
            else return backtrack(i-1,j);
        }
    }
    return backtrack(m,n);
}

