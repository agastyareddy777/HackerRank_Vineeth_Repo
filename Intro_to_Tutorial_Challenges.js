function processData(input) {

    var sh, V, n, ar, i, ans = null;
    sh = input.split('\n');
    V = parseInt(sh[0]);
    n = parseInt(sh[1]);
    ar = sh[2].split(' ');

    for (i = 0; i < n; i += 1) {
        if (parseInt(ar[i]) === V) {
            ans = i;
            break;
        }
    }
    console.log(ans);
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

