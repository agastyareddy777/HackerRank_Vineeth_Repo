function processData(input) {
    var lines = input.split('\n')
    var sizes = lines.shift().split(' ').map(Number)
    var matrix = lines.map(function (line) {
        return line.match(' ') ? line.split(' ').map(Number) : Number(line)
    })
    size = sizes[0]
    var gassum = 0
    var distsum = 0
    for (var i = 0; i < size; i++) {
        var total = 0
        var gas = matrix[i][0]
        var dist = matrix[i][1]
        if (gas >= dist) {
            for (var j = i; j < size; j++) {
                total += (matrix[j][0] - matrix[j][1])
                if (total < 0) {
                    break
                }
                else {
                    if (j == size - 1) {
                        j = -1
                        if (i == 0)
                            return console.log(i)
                    }
                    else if (j == i - 1) {
                        return console.log(i)
                    }
                }
            }
        }
    }
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