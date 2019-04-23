function processData(input) {
    t = input.split("\n");
    s = t[1].split(" ");
    a = new Array();
    for (i = 0; i < t[0]; i++) {
        if (!a[s[parseInt(i)]]++)
            a[s[parseInt(i)]] = 1;
    }
    p = "";
    for (i = 0; i < a.length; i++)
        p += (a[i] === undefined ? 0 : a[i]) + " ";
    console.log(p);
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