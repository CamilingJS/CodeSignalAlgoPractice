// Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

// Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

// Example

// For n = 10 and firstNumber = 2, the output should be
// solution(n, firstNumber) = 7.



// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// A positive even integer.

// Guaranteed constraints:
// 4 ≤ n ≤ 20.

// [input] integer firstNumber

// Guaranteed constraints:
// 0 ≤ firstNumber ≤ n - 1.

let n = 6
let firstNumber = 3

function solution(n, firstNumber) {
    const mid = Math.floor(n/2)
    let sol = 0; 
    if(firstNumber>mid){
        return sol = (mid + firstNumber) - n; 
        
    }  
    
    if ((mid + firstNumber) == n ){
        return sol = 0; 
    }

    else {
        return sol = mid + firstNumber
    }

}

console.log(solution(n, firstNumber))
