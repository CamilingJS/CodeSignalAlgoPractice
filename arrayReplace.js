// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

// Example

// For inputArray = [1, 2, 1], elemToReplace = 1, and substitutionElem = 3, the output should be
// solution(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer inputArray

// Guaranteed constraints:
// 0 ≤ inputArray.length ≤ 104,
// 0 ≤ inputArray[i] ≤ 109.

// [input] integer elemToReplace

// Guaranteed constraints:
// 0 ≤ elemToReplace ≤ 109.

// [input] integer substitutionElem

// Guaranteed constraints:
// 0 ≤ substitutionElem ≤ 109.

// [output] array.integer


let inputArray = [1, 2, 1]
let elemToReplace = 1
substitutionElem = 3

function solution(inputArray, elemToReplace, substitutionElem) {
    let newArr = []
    for(let i = 0; i <inputArray.length; i++){
        let el = inputArray[i]
        if(el == elemToReplace ){
            newArr.push(substitutionElem)
        } else{
            newArr.push(el)
        }
    }
    return newArr; 
    
}

console.log( solution(inputArray, elemToReplace, substitutionElem))