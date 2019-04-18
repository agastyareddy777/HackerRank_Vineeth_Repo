process.stdin.resume();
process.stdin.setEncoding('ascii');
var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
process.stdin.on('data', function (data) {
    input_stdin += data;
});
process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});
function readLine() {
    return input_stdin_array[input_currentline++];
}
function main() {
    var n1_temp = readLine().split(' ');
    var n1 = parseInt(n1_temp[0]);
    var n2 = parseInt(n1_temp[1]);
    var n3 = parseInt(n1_temp[2]);
    h1 = readLine().split(' ');
    h1 = h1.map(Number);
    h2 = readLine().split(' ');
    h2 = h2.map(Number);
    h3 = readLine().split(' ');
    h3 = h3.map(Number);
    console.log(processAlgo(h1, h2, h3))
}
function processAlgo(h1, h2, h3) {
    h1 = reverseAndAdd(h1);
    h2 = reverseAndAdd(h2);
    h3 = reverseAndAdd(h3);
    if (h1.length == 0 || h2.length == 0 || h3.length == 0) {
        return 0
    }
    if (h1.length <= h2.length && h1.length <= h3.length)
        return findNum(h1, h2, h3);
    if (h2.length <= h1.length && h2.length <= h3.length)
        return findNum(h2, h1, h3);
    if (h3.length <= h2.length && h3.length <= h1.length)
        return findNum(h3, h1, h3);
}
function createHashMap(arr) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = true;
    }
    return map;
}
function reverseAndAdd(arr) {
    arr = arr.reverse();
    for (let i = 1; i < arr.length; i++) {
        arr[i] += arr[i - 1];
    }
    return arr.reverse();
}
function findNum(smallest, arr1, arr2) {
    arr1Hash = createHashMap(arr1);
    arr2Hash = createHashMap(arr2);
    for (let i = 0; i < smallest.length; i++) {
        if (arr1Hash[smallest[i]] && arr2Hash[smallest[i]]) {
            return smallest[i]
        }
    }
    return 0;
}