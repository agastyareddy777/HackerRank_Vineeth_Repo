'use strict';
function isPangram(S) {
    var s = S.trim().toLowerCase();
    var arr = new Array(26);
    for (var i = 0; i < 26; i++) {
        arr[i] = 0;
    }
    for (var i = 0; i < s.length; i++) {
        if (s[i] < 'a' || s[i] > 'z') { continue; }
        var idx = s.charCodeAt(i) - 'a'.charCodeAt(0);
        arr[idx]++;
    }
    for (var i = 0; i < 26; i++) {
        if (arr[i] == 0) { return false; }
    }
    return true;
}

function processData(input) {
    var parse_fun = function (s) { return parseInt(s, 10); };
    var lines = input.split('\n');
    console.log(isPangram(lines[0]) ? 'pangram' : 'not pangram');

}
process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) { _input += input; });
process.stdin.on("end", function () { processData(_input); });