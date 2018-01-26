/*********************************

Use: "HolelWrdlo!".decrypt(3) OR "HolelWrdlo!".decrypt()

**********************************/
String.prototype.decrypt = function(rows) {
    var fence = []
    for (var i = 0; i < rows; i++) fence.push([])
    var rail = 0,
      change = 1;

    this.split('').forEach(char => {
        fence[rail].push(char)
        rail += change

        if (rail === rows-1 || rail === 0) change = -change
    })

    var rFence = []
    for (var i = 0; i < rows; i++) rFence.push([])

    i = 0
    s = this.split('')
    for (r of fence) {
        for (var j = 0; j < r.length; j++) rFence[i].push(s.shift())
        i++
    }

    rail = 0
    change = 1
    var r = ''
    for (var i = 0; i < this.length; i++) {
        r += rFence[rail].shift()
        rail += change

        if (rail === rows-1 || rail === 0) change = -change
    }

    return r
}

module.exports = (text, rows=3) => text.decrypt(rows)
