process.stdin.resume();
process.stdin.setEncoding("ascii");

var data = '';
process.stdin.on("data", function (input) {
    data += input;
});

process.stdin.on("end", function (input) {
    data = data.split('\n');
    nums = data[1].trim().split(' ').filter(function (_) { return !!_ }).map(function (_) { return parseInt(_) });
    var count = 0;

    for (var i = 1; i < nums.length; i++) {
        var ele = nums[i];
        for (var j = i - 1; j >= 0; j--) {
            if (nums[j] > ele) {
                count++;
                nums[j + 1] = nums[j];
            } else {
                nums[j + 1] = ele;
                break;
            }
        }
        if (-1 == j) {
            nums[0] = ele;
        }
    }
    console.log(count);
});
