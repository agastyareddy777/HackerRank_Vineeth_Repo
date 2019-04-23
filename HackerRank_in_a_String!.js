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
    var q = parseInt(readLine());
    var query = "hackerrank";
    for (var a0 = 0; a0 < q; a0++) {
        var s = readLine(), i, j = 0;
        // your code goes here
        for (var i = 0; i < s.length; i++) {
            if (s[i] == query[j]) {
                j++;
            }
        }
        console.log((j == query.length) ? "YES" : "NO");
    }
}