/**
 * given A return A + f(A-1) + f(A-2) + f(A-3)
 * @param {number} A 3
 * @returns {number}
 */
function sequencePeoblem(A) {
    if (A <= 1) return 1
    if (A == 2) return 2
    return A + sequencePeoblem(A - 1) + sequencePeoblem(A - 2) + sequencePeoblem(A - 3)
}

console.log(sequencePeoblem(3))