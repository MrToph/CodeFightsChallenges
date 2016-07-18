function unshift (n) {
  arr = ')!@#$%^&*('.split('');
  for (i = 0; i < arr.length; i++) n = n.replace(arr[i], i.toString());
  return parseInt(n);
}
