'use strict';

const fs = require('fs');

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

// Complete the timeInWords function below.
function timeInWords(hour, mins) {

    if (mins % 15 == 0) {
        switch (mins) {
            case 0: return getHour(hour) + " o' clock"; break;
            case 15: return "quarter past " + getHour(hour); break;
            case 30: return "half past " + getHour(hour); break;
            case 45: hour++; return "quarter to " + getHour(hour); break;
        }
    } else {
        var minutes = ["error", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",

            "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen",

            "nineteen", "twenty", "twenty one", "twenty two", "twenty three", "twenty four", "twenty five",

            "twenty six", "twenty seven", "twenty eight", "twenty nine"];

        if (mins < 30) {
            if (mins == 1) {
                return "one minute past " + getHour(hour);
            } else {
                return minutes[mins] + " minutes past " + getHour(hour);
            }
        } else {
            hour++;
            if (mins == 59) {
                return "one minute to " + getHour(hour);
            } else {
                return minutes[(60 - mins)] + " minutes to " + getHour(hour);
            }
        }
    }
}

function getHour(hour) {
    var hours = ["error", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven",

        "twelve"];
    return hours[hour];
}
function main() {

    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const h = parseInt(readLine(), 10);
    const m = parseInt(readLine(), 10);
    let result = timeInWords(h, m);
    ws.write(result + "\n");
    ws.end();
}
