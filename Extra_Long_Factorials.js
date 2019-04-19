function processData(input) {
    input |= 0;
    var result = '1';
    for (; input; input--) {
        result = multiply(result, input + '');
    }
    console.log(result);
}
function multiply(a, b) {
    a = a.split('').reverse();
    b = b.split('').reverse();
    var result = [];
    for (var i = 0; a[i] >= 0; i++) {
        for (var j = 0; b[j] >= 0; j++) {
            if (!result[i + j]) {
                result[i + j] = 0;
            }
            result[i + j] += a[i] * b[j];
        }
    }
    for (var i = 0; result[i] >= 0; i++) {
        if (result[i] >= 10) {
            if (!result[i + 1]) {
                result[i + 1] = 0;
            }
            result[i + 1] += parseInt(result[i] / 10);
            result[i] %= 10;
        }
    }
    return result.reverse().join('');
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);

});