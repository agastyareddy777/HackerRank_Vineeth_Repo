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
    var s_arr = s.replace(/([A-Z])/g, ' $1').split(' ');
    console.log(s_arr.length);

}