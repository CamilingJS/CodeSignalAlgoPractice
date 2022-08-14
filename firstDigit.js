// Find the leftmost digit that occurs in a given string.

// Example

// For inputString = "var_1__Int", the output should be
// solution(inputString) = '1';
// For inputString = "q2q-q", the output should be
// solution(inputString) = '2';
// For inputString = "0ss", the output should be
// solution(inputString) = '0'.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A string containing at least one digit.

// Guaranteed constraints:
// 3 ≤ inputString.length ≤ 10.

// [output] char


function solution(inputString) {
    const matches = inputString.match(/(\d+)/);
    console.log(matches)
    if (matches) {
            let num = matches[0]
            console.log(num.slice(0,1))
            let num1 = num.slice(0,1)
            return num1
    }
    
}

let inputString = "var_1__Int"
console.log(solution(inputString))