process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
process.stdin.on('data', function (data) {
    input_stdin += data;
});
process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}
function main() {
    var s = readLine();
    var n = parseInt(readLine());
    var i = 0;
    var c = '';
    var ascii = 0;
    var value = 0;
    var g = s.match(/(.)\1*/g);
    var valueArray = [];
    var q = 0;
    var gi = 0;
    g.forEach(function () {
        i = g[gi].length;
        ascii = g[gi][0].charCodeAt(0);
        value = ascii - 96;
        while (q < i) {
            valueArray.push(value * (q + 1));
            q++;
        };
        q = 0;
        gi++;
    });
    for (var a0 = 0; a0 < n; a0++) {
        var x = parseInt(readLine());
        if (valueArray.indexOf(x) != -1) {
            console.log('Yes');
        } else {
            console.log('No');
        }
    }
}