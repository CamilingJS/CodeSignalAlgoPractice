// Check if all digits of the given integer are even.

// Example

// For n = 248622, the output should be
// solution(n) = true;
// For n = 642386, the output should be
// solution(n) = false.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// Guaranteed constraints:
// 1 ≤ n ≤ 109.

// [output] boolean

// true if all digits of n are even, false otherwise.

let n = 642386

function solution(n) {
    let arr = (""+n).split('')
    console.log(arr)
    for(let i = 0; i<arr.length; i++){
        let int = +arr[i]
        if(int % 2 !== 0){
            return false
        }else{
            return true; 
        }
    }
    return; 

}

console.log(solution(n))