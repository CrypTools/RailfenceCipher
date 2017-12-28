/*********************************

Use: "HolelWrdlo!".decrypt(3) OR "HolelWrdlo!".decrypt()

**********************************/
String.prototype.decrypt = function(rows = 3) {
    const div = 2 * (rows - 2) + 2;
    const stringArr = this.split("");
    const len = parseInt(stringArr.length / div);
    let remainder = stringArr.length % div;
    let splitArr = [];
    let tempArr = [];
    const result = [];
    for (let i = 0; i < rows; i++) {
        splitArr.push(i == 0 || i == rows - 1 ? len : 2 * len);
    }
    if (remainder > rows) {
        splitArr = splitArr.map(num => num + 1);
        remainder = remainder - rows;
        for (var j = rows - 2; j >= rows - remainder - 1; j--) {
            splitArr[j]++;
        }
    } else {
        for (var j = 0; j < remainder; j++) {
            splitArr[j]++;
        }
    }

    tempArr = splitArr.map(len => {
        const ans = stringArr.splice(0, len);
        return ans;
    });
    let float = 0;
    let k = 0;

    const lineUp = isAdd => {
        if (k == this.length) {
            return;
        }
        result.push(tempArr[float].shift());
        k++;
        isAdd ? float++ : float--;
        if (float == rows) {
            float = float - 2;
            isAdd = false;
        }
        if (float == 0) {
            isAdd = true;
        }
        lineUp(isAdd);
    }

    lineUp(true);
    return result.join("");
}
