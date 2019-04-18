function isBalanced(line) {
    var pairMap = {
        ')': '(',

        ']': '[',

        '}': '{'
    };
    var stack = [];
    for (var j = 0; j < line.length; j++) {
        if (line.charAt(j) === '(' || line.charAt(j) === '{' || line.charAt(j) === '[') {
            stack.push(line.charAt(j));
        } else if (pairMap[line.charAt(j)] === stack[stack.length - 1]) {
            stack.pop();
        } else {
            console.log('NO');
            return;
        }
    }
    if (stack.length === 0) {
        console.log('YES');
    } else {
        console.log('NO');
    }
}
function processData(input) {
    var inputArr = input.split('\n');
    var numLines = inputArr[0];
    for (var i = 1; i <= numLines; i++) {
        var line = inputArr[i];
        isBalanced(line);
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