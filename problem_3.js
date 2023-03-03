// function fibonacci(n){       // TC: 2^n
//     if(n==1) return 0
//     if(n==2) return 1
//     return fibonacci(n-1) + fibonacci(n-2)
// }

/**
 * TC: O(n)
 * 0 1 1 2 3
 * @param {number} n 66
 * @param {object} memo {}
 * @returns {number}
 */
function fibonacciII(n, memo = {}) {
    if (n == 0) return 0
    if (n == 1) return 1
    if (n in memo) return memo[n]
    const a = fibonacciII(n - 1, memo) + fibonacciII(n - 2, memo)
    memo[n] = a
    return memo[n]
}
console.log(fibonacciII(9))