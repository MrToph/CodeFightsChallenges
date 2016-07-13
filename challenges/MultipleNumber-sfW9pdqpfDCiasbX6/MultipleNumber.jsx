MultipleNumber = n => {
  while((n = n.split('').reduce((a, x) => a = a * x, 1)) > 10) n = n + '';
  return n;
};
