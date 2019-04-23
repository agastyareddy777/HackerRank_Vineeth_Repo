function processData(input) {
    var data = input.split('\n').map(function (num) { return parseInt(num, 10); }),
        n = data.shift(),
        sortFunction = function (a, b) {
            return a - b;
        };

    for (var i = 1; i <= n; i++) {
        var medianIndex = i / 2,
            currentStream = data.slice(0, i).sort(sortFunction);
        if ((medianIndex % 1) === 0) {
            // array is an even length so need to average middle two values
            var a = currentStream[medianIndex],
                b = currentStream[medianIndex - 1];

            process.stdout.write(((a + b) / 2).toFixed(1) + '\n');
        } else {
            // array is an odd length so can just use the middle value
            process.stdout.write(currentStream[Math.floor(medianIndex)].toFixed(1) + '\n');

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







