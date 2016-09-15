function spiderMove (x, y) {
  x = Math.abs(x)
  y = Math.abs(y)
  return Math.ceil(f(x + y) / f(x) / f(y))
}

f = a => a < 1 ? 1 : a * f(a - 1)
