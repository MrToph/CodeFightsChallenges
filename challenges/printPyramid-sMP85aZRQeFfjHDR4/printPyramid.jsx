printPyramid = (c, d) => [...Array(c)].map((v, i) => '*'.repeat(d ? i + 1 : c - i));
