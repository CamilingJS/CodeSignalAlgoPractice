// Given two cells on the standard chess board, determine whether they have the same color or not.

// Example

// For cell1 = "A1" and cell2 = "C3", the output should be
// solution(cell1, cell2) = true.



// For cell1 = "A1" and cell2 = "H3", the output should be
// solution(cell1, cell2) = false.



// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string cell1

// Guaranteed constraints:
// cell1.length = 2,
// 'A' ≤ cell1[0] ≤ 'H',
// 1 ≤ cell1[1] ≤ 8.

// [input] string cell2

// Guaranteed constraints:
// cell2.length = 2,
// 'A' ≤ cell2[0] ≤ 'H',
// 1 ≤ cell2[1] ≤ 8.

// [output] boolean

// true if both cells have the same color, false otherwise.

let cell1 = "A1"
let cell2 = "C3"

function solution(cell1, cell2) {

    const letters = "ABCDEFGH"
    cell1 = letters.indexOf(cell1[0])+ Number(cell1[1])
    cell2 = letters.indexOf(cell2[0])+ Number(cell2[1])
    return cell1 %2 === cell2 %2


}

console.log(solution(cell1, cell2))