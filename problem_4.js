/**
 * Time Complexity: O(logn)
 * Space Complexity: O(logn)
 * 
 * @param {number} x 2.00000
 * @param {number} n -2147483648
 * @returns 
 */
function myPow(x, n) {
    if (n === 0) return 1;
    if (n < 0) x = 1 / x
    let ha
    if (n < 0 && x != 0) ha = myPow(x, Math.floor((n * -1) / 2))
    else ha = myPow(x, Math.floor(n / 2))
    const he = ha * ha
    if (n & 1) return he * x
    return he
}

// https://leetcode.com/problems/powx-n/description/