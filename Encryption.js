function main(data) {
    var i, j, word, pos, result = [],
        col_count = Math.ceil(Math.sqrt(data.length)),
        row_count = Math.ceil(data.length / col_count);
    for (i = 0; i < col_count; ++i) {
        word = '';
        for (j = 0; j < row_count; ++j) {
            pos = col_count * j + i;
            if (pos < data.length)
                word += data[pos];
        }
        result.push(word);
    }
    return result.join(' ');
}
var data = '';
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", function (input) {
    data += input;
});
process.stdin.on('end', function () {
    process.stdout.write(main(data.trim()));
});