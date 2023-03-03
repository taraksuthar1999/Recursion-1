// reverse string

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0


process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});
function readLine() {
    return inputString[currentLine++]
}
function main() {
    // Write your code here
    // Use console.log to output the result
    const Str = readLine()
    const res = reverse(Str)
    console.log(res)
}

/**
 * 
 * @param {string} Str 'tarak'
 * @returns {string}
 */
function reverse(Str) {
    if (Str.length == 0) return ''
    return Str[Str.length - 1] + reverse(Str.substring(0, Str.length - 1))
}
