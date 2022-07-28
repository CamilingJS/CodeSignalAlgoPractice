// Given an integer n, return the largest number that contains exactly n digits.

// Example

// For n = 2, the output should be
// solution(n) = 99.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// Guaranteed constraints:
// 1 ≤ n ≤ 9.

// [output] integer

// The largest integer of length n.

let n = 2
function solution(n) {

    let text = ""
    let i=0
    while (i < n) {
        text += "9";
        i++;
      }
    return +text

}

console.log(solution(n))
