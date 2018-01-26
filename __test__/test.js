// Test made using EyeJS - https://eye.js.org

const path = require('path').normalize(__testDir + "/../js/")

const encrypt = require(path + "encrypt.js")
const decrypt = require(path + "decrypt.js")


eye.test("Encryption", "node",
	$ => $(encrypt("RailFence cipher test phrase.")).Equal("RFep tr.alec ihrts haeinceeps")
)
eye.test("Decryption", "node",
	$ => $(decrypt("RFep tr.alec ihrts haeinceeps")).Equal("RailFence cipher test phrase."),
	$ => $(decrypt(encrypt("RailFence cipher test phrase.", 5), 5)).Equal("RailFence cipher test phrase.")
)
