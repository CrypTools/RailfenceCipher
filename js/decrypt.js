/* ==========================================================================
 *
 *    Use:
 *    "HWe o!lordll".decrypt(4)
 *    => "Hello World!"
 *
 * ========================================================================== */


String.prototype.decrypt = function(rows = 3) {
    rows = rows || 3
    let fence = [];
    for (let i = 0; i < rows; i++) fence.push([])
    let rail = 0;
    let change = 1;

    this.split("").forEach(char => {
        fence[rail].push(char)
        rail += change

        if (rail === rows - 1 || rail === 0) change = -change
    })

    const rFence = [];
    for (let i = 0; i < rows; i++) rFence.push([])

    i = 0
    let s = this.split("")
    for (r of fence) {
        for (let j = 0; j < r.length; j++) rFence[i].push(s.shift())
        i++
    }

    rail = 0
    change = 1
    var r = ""
    for (var i = 0; i < this.length; i++) {
        r += rFence[rail].shift()
        rail += change

        if (rail === rows - 1 || rail === 0) change = -change
    }

    return r
}

module.exports = (text, rows = 3) => text.decrypt(rows);
