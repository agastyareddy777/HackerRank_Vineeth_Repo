function processData(input) {
    var arr = input.split('\n');
    var n = parseInt(arr.shift());
    var stack = [];
    var logic = function (x) {
        var ops = x.split(' ').map(Number);
        if (ops[0] === 1) {
            stack.push(ops[1]);
        } else if (ops[0] === 2) {
            stack.pop();
        } else if (ops[0] === 3) {
            var copies = stack.slice();
            var max = 0;
            while (copies.length > 0) {
                var popped = copies.pop();
                if (popped >= max)
                    max = popped;
            }
            console.log(max);
        }
    };
    z = 0, lastValid = 0;
    do {
        var num = arr[z];
        if (!!num) {
            logic(num);
            lastValid = z;
        }
        else {
            logic(arr[lastValid]);
        }
        z++;
    } while (z < n);
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