arraySorting = x => {
  S = 0;
  M = Math.max;
  for (i = 0; i < x.length; i++) {
    if (x[i] != i + 1) {
      S = M(S, 1);
      if (x[x[i] - 1] != i + 1) {
        S = M(S, 2);
      }
    }
  }
  return S;
};

// need 0 S if array sorted
// need 1 step if swapping i with j makes both i and j end up in correct position
// need 2 otherwise
// function arraySorting(x) {
//     var steps = 0
//     for(var i = 0, j = 1; i < x.length; i++, j++){
//         if(x[i] != j){
//             steps = Math.max(steps, 1)
//             if(x[x[i]-1] != i+1){
//                 steps = Math.max(steps, 2)
//             } 
//         } 
//     }
//     return steps
// }
