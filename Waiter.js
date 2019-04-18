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
    inputString = inputString.trim().split('\n').map(str => str.trim());
    main();
});
function readLine() {
    return inputString[currentLine++];
}
function primes(n) {
    let primeNumbers = [2];
    const first = (n) => {
        if (primeNumbers.length >= n) return primeNumbers.slice(0, n + 1);
        let value = primeNumbers[primeNumbers.length - 1] + 1;
        let isPrime;
        while (primeNumbers.length < n) {
            isPrime = true;
            primeNumbers.some((prime) => {
                if (value % prime === 0) {
                    isPrime = false;
                    return true;
                }
            });
            if (isPrime) primeNumbers.push(value);
            value++;
        }
        return primeNumbers;
    }
    return {
        first: first
    }
}
/*

 * Complete the waiter function below.

 */

function waiter(number, q) {

    /*

     * Write your code here.

     */

    var prime = primes().first(q);
    var b = [];
    var ans = [];
    for (var i = 1; i <= q; i++) {
        b = number.filter((e) => e % prime[i - 1] == 0);
        ans.push(...b);
        number = number.filter((e) => e % prime[i - 1] != 0);
        number.reverse();
    }
    number.reverse();
    ans.push(...number);
    return ans;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const nq = readLine().split(' ');
    const n = parseInt(nq[0], 10);
    const q = parseInt(nq[1], 10);
    const number = readLine().split(' ').map(numberTemp => parseInt(numberTemp, 10));
    let result = waiter(number, q);
    ws.write(result.join("\n") + "\n");
    ws.end();

}