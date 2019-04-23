function processData(input) {
    var inpAry = input.trim().split(/\r\n|\r|\n/g);
    var ary = inpAry[1].trim().split(" ");
    var v = ary[ary.length - 1];
    for (var i = ary.length - 2; i >= 0; i--) {
        if (ary[i] > v) {
            ary[i + 1] = ary[i];
            console.log((ary.join(" ")));
        }
        else {
            ary[i + 1] = v;
            console.log((ary.join(" ")));
            return;
        }
    }
    ary[0] = v;
    console.log((ary.join(" ")));
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