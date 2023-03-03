/**
 * Time Complexity: log(n)
 * Space Complexity: log(n)
 * @param {number} num 65
 * @returns 
 */
function solve(num) {
    let d = Math.floor(num / 10)
    if (d == 0) return num
    let rem = num % 10
    return solve(d + rem)
}
console.log(solve(65))


//https://leetcode.com/problems/add-digits/description/