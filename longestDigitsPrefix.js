// Given a string, output its longest prefix which contains only digits.

// Example

// For inputString = "123aa1", the output should be
// solution(inputString) = "123".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// Guaranteed constraints:
// 3 ≤ inputString.length ≤ 100.

// [output] string

// [JavaScript] Syntax Tips


let inputString = "123aa1"
function solution(inputString) {
    const matches = inputString.match(/^\d*/);
    if (matches) {
            let num = matches[0]
            return num
    }
    
}

console.log(solution(inputString))