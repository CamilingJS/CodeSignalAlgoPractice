// Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).

// Example

// For inputString = "crazy", the output should be solution(inputString) = "dsbaz".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A non-empty string consisting of lowercase English characters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 1000.

// [output] string

// The resulting string after replacing each of its characters.


let inputString = "crazy"
function solution(inputString) {

    return inputString.split('').map(element =>{
        if(element === 'z') return'a'
        return String.fromCharCode(element.charCodeAt()+1)
    }).join('')
    
}
console.log(solution(inputString))

