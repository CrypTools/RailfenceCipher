# RailFence Cipher
<p align="center">
<!-- replace image by project Image -->
<img height="128" src="https://cryptools.github.io/img/railfence.svg">
</p>
<p align="center">
<img src="https://cryptools.github.io/img/status/implemented.svg">
<img src="https://img.shields.io/travis/CrypTools/RailfenceCipher.svg">
<img src="https://img.shields.io/github/license/Cryptools/RailFenceCipher.svg">
<img src="https://img.shields.io/github/contributors/Cryptools/RailFenceCipher.svg">
</p>

A transposition cipher also called the zigzag cipher.

## How it works

### Encoding

The Rail Fence Cipher places the letters in a zigzag pattern before reading them again, from top to bottom, right to left, ignoring the zigzag.

Example:

Let's imagine that we are encoding `Hello World!` on 3 rails. we draw out our three rails and place the lettres in the zigzag pattern like this:

```txt
H - - - o - - - r - - -
- e - l -   - o - l - !
- - l - - - w - - - d -
```

When this is read top to bottom, left to right, we get `Horel ol!lwd`


### Decoding

Decoding is a bit harder. We can re-railfence the encoded string to find out how many characters there are per rail. From that, we can divide up the first encoded string into chunks according to their rail, and place them on a series of rails, to then read them according to the zigzag pattern.

Example:

First, we need to figure out how many characters there are per rail. We do this by re-encoding the already railfenced string and counting the characters per rail.

```txt
H - - - l - - - ! - - -        3 characters
- o - e -   - l - l - d        6 characterst
- - r - - - o - - - w -        3 characters
```

Now we can divide the first string according to that 3, 6, 6 pattern, to get `Hor`, `el lod!`, `lwd`.
Placing these onto a set of rails like these:

```txt
| - - - | - - - | - - -
- | - | - | - | - | - |
- - | - - - | - - - | -
```

We can are back to the original set of rails used to encode the message, and we are able to read the original message if we follow the zigzag pattern.

## Cons
* The amount of rails is limited to half the length of the message. Brute force methods can therefore crack messages of reasonable length.
* Can easily be cracked by hand for shorter messages.

## Implementations

|  Language  |           Encrypt           |           Decrypt           |
|------------|-----------------------------|-----------------------------|
| Javascript | [encrypt.js](js/encrypt.js) | [decrypt.js](js/decrypt.js) |
|   Python   | [encrypt.py](py/encrypt.py) | [decrypt.py](py/decrypt.py) |
|    Swift   | [lib.swift](swift/lib.swift)| [lib.swift](swift/lib.swift)|

## Running the tests

Tests are automatically handled by [Travis CI](https://travis-ci.org/CrypTools/RailfenceCipher/).

## Contributing

Please read [CONTRIBUTING.md](https://github.com/CrypTools/cryptools.github.io/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/CrypTools/RailFenceCipher/tags).

## Authors

Made with ❤️ at CrypTools.

See also the list of [contributors](https://github.com/CrypTools/RailFenceCipher/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
