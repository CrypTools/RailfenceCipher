/*******************************
 *
 *
 * Use: "RailFence cipher test phrase.".encrypt() or "RailFence cipher test phrase.".encrypt(3)
 *      "RailFence cipher test phrase.".encrypt().decrypt()
 *
 *
 ******************************/
import Foundation

extension String {
    func encrypt(_ rows: Int = 3) -> String {
        var fence = [[String]]()
        for _ in 0...rows - 1 {
            fence.append(Array<String>())
        }
        var rail = 0
        var change = 1
        let str = Array(self)
        for i in str {
            fence[rail].append(String(i))
            rail += change
            if (rail == rows-1 || rail == 0) {
                change = -change
            }
        }
        var  r = ""
        for rail in fence {
            r += rail.joined(separator: "")
        }
        return r
    }
    func decrypt(_ rows: Int = 3) -> String {
        var fence = [[String]]()
        for _ in 0...rows - 1 {
            fence.append(Array<String>())
        }
        var rail = 0
        var change = 1
        var str = Array(self)
        for i in str {
            fence[rail].append(String(i))
            rail += change
            if (rail == rows-1 || rail == 0) {
                change = -change
            }
        }
        var rFence = [[String]]()
        for _ in 0...rows - 1 {
            rFence.append(Array<String>())
        }
        var i = 0
        let l = str.count
        for r in fence {
            for _ in 0...r.count - 1 {
                rFence[i].append(String(str[0]))
                str.remove(at: 0)
            }
            i += 1
        }
        rail = 0
        change = 1
        var r = ""
        for _ in 0...l - 1 {
            r += rFence[rail][0]
            rFence[rail].remove(at: 0)
            rail += change
            if (rail == rows-1 || rail == 0) {
                change = -change
            }
        }
        return r
    }
}