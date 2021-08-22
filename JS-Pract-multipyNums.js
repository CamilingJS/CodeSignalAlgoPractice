// ✖️ multiplyNumbers
// Given 2 numbers, multiply them WITHOUT THE * OPERATOR!

// ex multiplyNumbers(2, 5) returns 10
// 0 / 3 Tests Passed
// ❌ multiplyNumbers(1,0) // Successfully multiplies with zero
// expected 0 got undefined
// ❌ multiplyNumbers(5,5) // It multiples 2 whole numbers
// expected 25 got undefined
// ❌ multiplyNumbers(100,500) // Still works with larger nums
// expected 50000 got undefined

let num1 = 5; 
let num2 = 0; 

let multiplyNumbers = function(num1, num2) {
  
  let product = 0; 
  for (let i =0; i < num1; i++){
    product +=num2; 
  }
  return product; 
}

console.log(multiplyNumbers(num1, num2))