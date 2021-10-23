// You are given a two-digit integer n. Return the sum of its digits.

// Example

// For n = 29, the output should be
// addTwoDigits(n) = 11.

let n = 29;
 
function addTwoDigits(n){
  let nStr = (n+"").split("")
  return sum = nStr.reduce((a,b) => a + parseFloat(b), 0) 
}

console.log(addTwoDigits(n))