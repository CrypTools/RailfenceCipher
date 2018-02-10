/*******************************
 *
 * ⚠️ Only encrypt for the moment. Decrypt coming soon
 * Use: "RailFence cipher test phrase.".encrypt() or "RailFence cipher test phrase.".encrypt(3)
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
}