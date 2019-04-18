'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    var count_pos = 0, count_neg = 0, count_null = 0;
    for (var i in arr) {
        if (arr[i] > 0) {
            count_pos++;
        }
        else if (arr[i] < 0) {
            count_neg++;
        }
        else {
            count_null++;
        }
    }
    console.log(count_pos / arr.length);
    console.log(count_neg / arr.length);
    console.log(count_null / arr.length);
}
function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
