function processData(input) {
    //Enter your code here
    var arr = input.split('');
    var success = 1;
    var i;
    while (success != 0) {
        success = 0;
        for (i = 0; i < arr.length - 1; i++) {
            if (arr[i] == arr[i + 1]) {
                arr.splice(i, 2);
                success = 1;
            }
        }
    }
    if (arr.join('').length != 0)
        console.log(arr.join(''));
    else
        console.log("Empty String");
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