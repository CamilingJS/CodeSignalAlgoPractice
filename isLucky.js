// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// solution(n) = true;
// For n = 239017, the output should be
// solution(n) = false.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// A ticket number represented as a positive integer with an even number of digits.

// Guaranteed constraints:
// 10 ≤ n < 106.

// [output] boolean

// true if n is a lucky ticket number, false otherwise.

let n = 115305; 
function solution(n) {
    let str = n.toString(); 
    let sum1 = 0;
    let sum2 = 0;
    for(let i=0; i < Math.round(str.length/2); i++){
        let num = +str[i]
        sum1 += num; 
        
    }
    
    for(let i = Math.round(str.length/2); i < str.length; i++){
        let num = +str[i]
        sum2 += num; 
    }
    
 
    if(sum1 === sum2){
        return true; 
    } else {
        return false
    }

}

console.log(solution(n))