function processData(input) {

    let lines = input.split('\n');
    let tests = parseInt(lines[0]);
    let index = 1;
    for (let i = 0; i < tests; i++) {
        let amount = parseInt(lines[index++]);
        let length = parseInt(lines[index++]);
        let costs = lines[index++].split(' ')
            .map(i => parseInt(i));
        let indexes = [];
        for (let j = 0; j < length - 1; j++) {
            for (let k = j + 1; k < length; k++) {
                if (costs[j] + costs[k] === amount) {
                    indexes.push(j + 1);
                    indexes.push(k + 1);
                }
            }
        }
        console.log(indexes.join(' '));
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

