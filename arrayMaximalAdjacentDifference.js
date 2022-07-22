// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

// Example

// For inputArray = [2, 4, 1, 0], the output should be
// solution(inputArray) = 3.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer inputArray

// Guaranteed constraints:
// 3 ≤ inputArray.length ≤ 10,
// -15 ≤ inputArray[i] ≤ 15.

// [output] integer

// The maximal absolute difference.

//PSEUDO CODE:
//Set a counter variable 
//loop through array
// set a var diff = Math.abs(arr[i] - arr[i+1])
// if diff > maxDiff then maxDiff = diff

let inputArray = [2, 4, 1, 0]
function solution(inputArray) {
    let maxDiff = 0;
    for(let i = 0; i<inputArray.length-1; i++){
        let diff = Math.abs(inputArray[i]-inputArray[i+1])
        console.log(diff)
        if(diff>maxDiff){
            maxDiff = diff; 
            console.log(maxDiff)
        }
    }
    return maxDiff; 
}
console.log(solution(inputArray))