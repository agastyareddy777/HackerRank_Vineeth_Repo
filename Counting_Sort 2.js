function processData(input) {

    var n = parseInt(input.split("\n")[0], 10);
    var targetArray = input.split("\n")[1].split(" ");
    for (var i = 0; i < n; i++) {
        targetArray[i] = parseInt(targetArray[i], 10);
    }
    var counterArray = new Array();
    for (var h = 0; h < 100; h++) {
        counterArray[h] = 0;
    }
    for (var j = 0; j < n; j++) {
        counterArray[targetArray[j]]++;
    }

    var result = "";
    for (var i = 0; i < 100; i++) {
        if (counterArray[i] == 0) {
            continue;
        }
        else {
            for (var j = 0; j < counterArray[i]; j++) {
                var value = i;
                result += value.toString();
                result += " ";
            }
        }
    }
    console.log(result);
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