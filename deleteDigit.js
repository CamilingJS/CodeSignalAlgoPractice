// Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

// Example

// For n = 152, the output should be
// solution(n) = 52;
// For n = 1001, the output should be
// solution(n) = 101.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// Guaranteed constraints:
// 10 ≤ n ≤ 106.

// [output] integer

// [JavaScript] Syntax Tips

function solution(n) {
    let arr = (""+n).split('')
    console.log(arr)

    let maxSum = 0;
    let tempSum = 0; 
    let maxArr = [];
    let tempArr = []
    for(let i=0; i < n; i++){
        maxSum +=arr[i]
        maxArr = arr.slice(0, arr.length-1)
    }
    tempSum = maxSum; 

    console.log(maxArr)
   

    for(let i = n; i < arr.length; i++){
        tempSum = tempSum - arr[i - n] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }

    return maxSum
}

let n = 152
console.log(solution(n))