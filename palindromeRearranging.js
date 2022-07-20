// Given a string, find out if its characters can be rearranged to form a palindrome.

// Example

// For inputString = "aabb", the output should be
// solution(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 50.

// [output] boolean

// true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.

let inputString = "aaccdbb"
function solution(inputString) {
    let arr = inputString.split('')
    let rec = []
    arr.map(element=>{
        if(rec[element]){
            rec[element]++
        }else {
            rec[element] =1; 
        }
    })
    let oddCount = 0
    for(let props in rec){
        let value = rec[props]
        if(oddCount > 1) break; 
        if(value%2 === 1){
            oddCount+=1
        }
       
    }
    return oddCount <= 1

}
console.log(solution(inputString))