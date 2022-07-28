// Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

// Check if the given string is a correct variable name.

// Example

// For name = "var_1__Int", the output should be
// solution(name) = true;
// For name = "qq-q", the output should be
// solution(name) = false;
// For name = "2w2", the output should be
// solution(name) = false.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string name

// Guaranteed constraints:
// 1 ≤ name.length ≤ 10.

// [output] boolean

// true if name is a correct variable name, false otherwise.

let varName = "var_1__Int"

function solution(varName) {

    return /^[a-z_]\w*$/i.test(varName);
}

console.log(solution(varName))