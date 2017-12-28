/*********************************

Use: "Hello World!".encrypt(3) OR "Hello World!".encrypt()

**********************************/
String.prototype.encrypt = function(rows = 3) {
    const arr = this.split(" ").join("").split(""); // remove space + make an array with each letters
    let result = [];
    for (let i = 0; i < rows; i++) {
        result[i] = [];
        for (let j = 0; j < arr.length; j++) {
            const k = j * 2 * (rows - 1) + i;
            k < arr.length ? result[i].push(k) : 1;
            if (i !== 0 && i !== rows) {
                const k2 = j * 2 * (rows - 1) - i;
                k2 < arr.length && k2 > 0 ? result[i].push(k2) : 1;
            }
        }
    }

    function uniqueSort(arr) {
        arr = Array.from(new Set(arr));
        return arr.sort((a, b) => a - b);
    }

    result = result.map(arr => uniqueSort(arr)).reduce((a, b) => a.concat(b)).map(i => arr[i]).join("");
    return result;
}
