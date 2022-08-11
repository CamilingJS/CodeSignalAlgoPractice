// Given array of integers, remove each kth element from it.

// Example

// For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should be
// solution(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer inputArray

// Guaranteed constraints:
// 5 ≤ inputArray.length ≤ 15,
// -20 ≤ inputArray[i] ≤ 20.

// [input] integer k

// Guaranteed constraints:
// 1 ≤ k ≤ 10.

// [output] array.integer

// inputArray without elements k - 1, 2k - 1, 3k - 1 etc.

function solution(inputsArray, ks) { 
    let newArr = []
    for(let i = 0; i < inputsArray.length; i++){
        if(inputsArray[i] % k !==0){
            newArr.push(inputsArray[i])
        }
    }
    return newArr
   
}
    
    

let inputsArray = [2, 4, 6, 8, 10]
let ks = 2
console.log(solution(inputsArray, ks))



function solution(inputArray, k) {
    return inputArray.filter((e, i) => (i + 1) % k)
}
let inputArray = [2, 4, 6, 8, 10]
let k = 2
console.log(solution(inputArray, k))