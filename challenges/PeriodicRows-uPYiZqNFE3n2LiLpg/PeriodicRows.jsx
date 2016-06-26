PeriodicRows = n => {
  b = [2, 10, 18, 36, 54, 86, 118];
  for (i = 0; i < 7; i++) {
    if (n <= b[i]) return i + 1;
  }
};
