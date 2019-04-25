function theRealLogic(n, arr) {

    arr = arr.sort(function (a, b) {
        return (a - b);
    });
    var l = arr.length;
    minDiff = arr[1] - arr[0];
    for (i = 1; i < l - 1; i++) {
        diff = arr[i + 1] - arr[i];
        if (diff < minDiff)
            minDiff = diff;
    }
    for (i = 0; i < l - 1; i++) {
        if ((arr[i + 1] - arr[i]) == minDiff) {
            process.stdout.write("" + arr[i] + " " + arr[i + 1] + " ");
        }
    }
}

function processData(input) {
    __inputArray = input.split('\n');
    var s, res;
    n = parseInt(__inputArray[0], 10);
    arr = __inputArray[1].split(" ");
    for (i = 0; i < arr.length; i++)
        arr[i] = parseInt(arr[i], 10);
    theRealLogic(n, arr);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
var __input_currentline = 0;
process.stdin.on("data", function (input) {
    _input += input;
});
process.stdin.on("end", function () {
    processData(_input);

});