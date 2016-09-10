HighestScore = g => f(JSON.parse(g), 1)

f = (g, p) => !isNaN(g) ? g : p * Math.max(p * f(g[0], -p), p * f(g[1], -p))

// function HighestScore(game) {
//     return f(JSON.parse(game), 1)
// }

// var f = (game, player) => {
//     if(!isNaN(game)) return game
//     var left = f(game[0], -player)
//     var right = f(game[1], -player)
//     return player * Math.max(player * left, player * right)
// }
