function findFactorial(A) {
    if (A === 1) return 1
    return A * findFactorial(A - 1)
}
console.log(findFactorial(4))