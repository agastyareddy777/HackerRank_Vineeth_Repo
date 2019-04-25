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
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    x = readLine().split(' ');
    x = x.map(Number);
    const max = Math.max(...x)
    const min = Math.min(...x)
    console.log(Math.ceil((max - min + 1) / (2 * k + 1)))

}