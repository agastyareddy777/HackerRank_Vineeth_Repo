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
    var n = parseInt(readLine());
    scores = readLine().split(' ');
    scores = scores.map(Number);
    var m = parseInt(readLine());
    alice = readLine().split(' ');
    alice = alice.map(Number);
    var ranks = [], x = 0;
    ranks[0] = scores[0];
    for (var i = 1; i < n; i++) {
        if (scores[i] < ranks[x]) {
            ranks[++x] = scores[i];
        }
    }
    var str = ranks.length - 1;
    alice.forEach(s => {
        while (ranks[str] < s) {
            str--;
        }
        if (ranks[str] == s) {
            console.log(str + 1);
        } else {
            console.log(str + 2);
        }
    })
}