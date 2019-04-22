function processData(input) {
    //Enter your code here
    input = input.split("\n");
    for (var t = 1; t < input.length; t++) {
        var str1 = input[t]; var str = [];
        for (i = 0; i < input[t].length; i++) { str.push(str1[i]); }
        var len = str.length;
        var i = len - 1;
        var j = len - 1;
        while (i > 0 && str[i - 1] >= str[i]) {
            i--;
        }
        if (i == 0) { console.log("no answer"); }
        else {
            while (str[j] <= str[i - 1]) { j--; }
            var temp = str[i - 1];
            str[i - 1] = str[j];
            str[j] = temp; j = len - 1;
            while (i < j) {
                var temp = str[i];
                str[i] = str[j];
                str[j] = temp; i++; j--;
            }
            var a = new String();
            for (i = 0; i < str.length; i++) { a = a.concat(str[i]); }
            console.log(a);
        }
    }
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