niceSubsets = n => ++n*++n/2
// these are just triangle numbers. observe that there can never be a subset of size > 2, as a-b > n. so all we need to count are empty set (1), all single sets (2n), and two element sets ((n-1*n)/2).
// It's easy to see that the two element sets form an increasing triangle for n