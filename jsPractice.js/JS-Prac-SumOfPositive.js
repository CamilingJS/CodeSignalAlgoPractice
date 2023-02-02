// ➕ sumOfPositive
// Given an array of numbers, add together the positive nums & return the sum
// If no numbers are positive, return 0
// Ex. sumOfPositive([1, -2, 3, 4]), returns 8
// 0 / 3 Tests Passed
// ❌ sumOfPositive([1,-2,3,4]) // It should work with one negative
// expected 8 got undefined
// ❌ sumOfPositive([-2,-5,-10,-1]) // It should be zero with all negatives
// expected 0 got undefined
// ❌ sumOfPositive([4,40,-40,-4]) // It should work with larger numbers
// expected 44 got undefined

let nums = [-1, -2, 3, 5, -2]

let sumOfPositive = function(nums) {
  if (nums.every( num => {
    if (num < 0) {
      return true; 
    }
   })) {
    return 0; 
  }

  let positives = nums.filter( num => {
    if (num > 0) {
      return true; 
    }
  })

  let sum = positives.reduce((acc, num) => {
    let sum = acc + num;
    return sum;
  })
  return sum; 
}

console.log(sumOfPositive(nums))

let sumOfPos = function(arr){
  if(arr.every(num=> num<0)){return 0}
  let positives  = arr.filter(num => num>0)
  console.log(positives)

  let sum = positives.reduce((curr, acc) => {
    let sum = curr+acc
    return sum
  })

  return sum

}

console.log(sumOfPos(nums))