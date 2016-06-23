WordScore = w =>w.split('').reduce((a,x) => a + x.charCodeAt(0)-96, 0)
