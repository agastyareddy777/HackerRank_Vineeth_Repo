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

// Complete the gridSearch function below.
function gridSearch(g, p) {
    for (var i in g) {
        if (g[i].includes(p[0])) {
            var ind = g[i].indexOf(p[0]);
            for (var j = 1; j < p.length; j++) {
                var t = parseInt(i) + parseInt(j);
                if (!g[t].substring(p[j], ind).includes(p[j])) {
                    break;
                }
            }
            if (j == p.length) {
                break;
            }
        }
    }
    if (i == g.length - 1) {
        return 'NO';
    }
    return 'YES';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const t = parseInt(readLine(), 10);
    for (let tItr = 0; tItr < t; tItr++) {
        const RC = readLine().split(' ');
        const R = parseInt(RC[0], 10);
        const C = parseInt(RC[1], 10);
        let G = [];
        for (let i = 0; i < R; i++) {
            const GItem = readLine();
            G.push(GItem);
        }
        const rc = readLine().split(' ');
        const r = parseInt(rc[0], 10);
        const c = parseInt(rc[1], 10);
        let P = [];
        for (let i = 0; i < r; i++) {
            const PItem = readLine();
            P.push(PItem);
        }
        let result = gridSearch(G, P);
        ws.write(result + "\n");
    }
    ws.end();
}