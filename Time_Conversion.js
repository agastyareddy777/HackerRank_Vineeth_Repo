function processData(input) {
    //Enter your code here
    var amPm = input.substring(input.length - 2);
    if (amPm == 'PM') {
        var replace = parseInt(input.substring(0, 2))
        input = input.replace(input.substring(0, 2), (replace < 12) ? replace + 12 : replace);
        input = input.substring(0, input.length - 2);
    } else {
        if (parseInt(input.substring(0, 2)) == 12) {
            input = input.replace(input.substring(0, 2), '00');
            input = input.substring(0, input.length - 2);
        } else {
            input = input.substring(0, input.length - 2);
        }
    }
    console.log(input)
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
