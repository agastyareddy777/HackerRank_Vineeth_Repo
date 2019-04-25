function processData(input) {

    input = input.split('\n');
    var a = input[1].split(' '), b = input[3].split(' ');
    var resa = {}, resb = {};
    a.forEach(function (e) {
        if (resa[e])
            resa[e]++
        else resa[e] = 1;
    });
    b.forEach(function (e) {
        if (resb[e])
            resb[e]++
        else resb[e] = 1;
    });
    res = [];
    var akey = Object.keys(resa);
    for (var i = 0; i < akey.length; i++) {
        var e = akey[i];
        if (resb[e] && resb[e] == resa[e])
            continue;
        else if (res.indexOf(e) == -1)
            res.push(Number(e));
    }
    console.log(res.sort(function (a, b) { return a - b }).join(' '))
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