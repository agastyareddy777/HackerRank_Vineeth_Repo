process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", function (input) {
    var lines = input.split("\n"),
        n = parseInt(lines[0], 10),
        ar = lines[1].split(' ').map(function (item) { return parseInt(item, 10); });
    if (n === 1) {
        console.log(ar[0]);
    }

    var sort = function (current_pos) {
        var current_value = ar[current_pos];
        for (var i = current_pos - 1; i >= 0; i--) {
            if (ar[i] > current_value) {
                ar[i + 1] = ar[i];
                ar[i] = current_value;
            }
        }
    }
    for (var i = 0; i < n; i++) {
        if (i > 0) {
            sort(i);
            console.log(ar.join(" "));
        }
    }
});