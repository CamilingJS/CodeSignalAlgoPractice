// A string is said to be beautiful if each letter in the string appears at most as many times as the previous letter in the alphabet within the string; ie: b occurs no more times than a; c occurs no more times than b; etc. Note that letter a has no previous letter.

// Given a string, check whether it is beautiful.

// Example

// For inputString = "bbbaacdafe", the output should be solution(inputString) = true.

// This string contains 3 as, 3 bs, 1 c, 1 d, 1 e, and 1 f (and 0 of every other letter), so since there aren't any letters that appear more frequently than the previous letter, this string qualifies as beautiful.

// For inputString = "aabbb", the output should be solution(inputString) = false.

// Since there are more bs than as, this string is not beautiful.

// For inputString = "bbc", the output should be solution(inputString) = false.

// Although there are more bs than cs, this string is not beautiful because there are no as, so therefore there are more bs than as.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A string of lowercase English letters.

// Guaranteed constraints:
// 3 ≤ inputString.length ≤ 50.

// [output] boolean

// Return true if the string is beautiful, false otherwise.


function solution(inputString) {
    let obj = {}
    let status = true
    for(let i=0; i<inputString.length; i++){  
        let letter = inputString[i]
        obj[letter] ? obj[letter]+=1 : obj[letter]=1
    }
    console.log(obj)
    console.log(Object.values(obj))
    let arr = Object.values(obj)
    for(let i=1; i<arr.length; i++){
        console.log(arr[0])
        console.log(arr[i+1])
        if(arr[i] != arr[0])
        {
            status = false
        } else 
        {
            status = true
            i++
        }
        return status
    }
    return status
}

let inputString = "aabbc"; 
console.log(solution(inputString))
