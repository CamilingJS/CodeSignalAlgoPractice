// Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

// Example

// For st = "abcdc", the output should be
// solution(st) = "abcdcba".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string st

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 3 ≤ st.length ≤ 10.

// [output] string


let st = "abcdc"
function solution(st) {
    if (isPalindrome(st))  return st;
    for (let i = 0; i < st.length; i++) {
        if (isPalindrome(st.slice(i, st.length))) {
            return st + Array.from(st.slice(0, i)).reverse().join('');
        }
    }
}

function isPalindrome(string) {
    return string == Array.from(string).reverse().join('')
}

console.log(Array.from("abdec").reverse().join(''))


console.log(solution(st))


