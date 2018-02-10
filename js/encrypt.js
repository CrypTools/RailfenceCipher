/* ==========================================================================
 *
 *    Use:
 *    "Hello World!".encrypt(4)
 *    => "HWe o!lordll"
 *    
 * ========================================================================== */


String.prototype.encrypt = function(rows=3) {
  var fence = []
  for (var i = 0; i < rows; i++) fence.push([])
  var rail = 0,
      change = 1;

  for (char of this.split('')) {
    fence[rail].push(char)
    rail += change

    if (rail === rows-1 || rail === 0) change = -change
  }

  var r = ''
  for (rail of fence) r += rail.join('')

  return r
}

module.exports = (text, rows) => text.encrypt(rows)
