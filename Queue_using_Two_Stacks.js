function processData(input) {
    var lines = input.split("\n");
    var num = lines[0];
    var tests = lines.slice(1).map(function (x) {
        return x.split(' ').map(Number);
    });
    var input = [];
    var output = [];
    for (var i = 0; i < num; i++) {
        if (tests[i][0] === 1) {
            input.push(tests[i][1]);
        } else if (tests[i][0] === 2) {
            if (output.length === 0) {
                while (input.length !== 0) {
                    output.push(input.pop());
                }
            }
            output.pop();
        } else if (tests[i][0] === 3) {
            if (output.length === 0) {
                console.log(input[0]);
            } else {
                console.log(output[output.length - 1]);
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