// Given a string, find the number of different characters in it.

// Example

// For s = "cabca", the output should be
// solution(s) = 3.

// There are 3 different characters a, b and c.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string s

// A string of lowercase English letters.

// Guaranteed constraints:
// 3 ≤ s.length ≤ 1000.

// [output] integer

let s = "cabca"

function solution(s) {
    let obj = {}
    for(let i=0; i<s.length; i++){
        obj[s[i]] ? obj[s[i]] +=1 : obj[s[i]]=1
    }

    let sol = Object.keys(obj).length
    return sol
}

console.log(solution(s))