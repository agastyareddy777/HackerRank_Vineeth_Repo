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


function minimumNumber(n, password) {
    const containsDigit = (password.match(/[0-9]/) || []).length > 0;
    const containsLower = (password.match(/[a-z]/) || []).length > 0;
    const containsUpper = (password.match(/[A-Z]/) || []).length > 0;
    const containsSpecial = (password.match(/[!@#$%^&*\(\)\-+]/) || []).length > 0;
    const needChars = (!containsDigit + !containsLower + !containsUpper + !containsSpecial);
    const need2 = Math.max(0, 6 - password.length);
    return Math.max(0, need2, needChars);
}
function main() {
    var n = parseInt(readLine());
    var password = readLine();
    var answer = minimumNumber(n, password);
    process.stdout.write("" + answer + "\n");

}