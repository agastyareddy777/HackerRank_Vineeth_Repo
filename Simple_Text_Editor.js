function processData(input) {
    input = input.split(/[ \n\t]/);
    var list = [];
    var state = [];
    for (var i = 1; i < input.length; i++) {
        switch (input[i]) {
            case '1': i++;
                state.push([...list]);
                list.push(...input[i].split(""));
                break;
            case '2': i++;
                state.push([...list]);
                for (var j = input[i]; j > 0; j--) {
                    list.pop();
                }
                break;
            case '3': i++;
                console.log(list[input[i] - 1]);
                break;
            case '4': list = state.pop();
                break;
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