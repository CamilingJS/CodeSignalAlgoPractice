// ⚖️ unbalancedArray
// Given an array of positive and negative integers, find the number that does not have an opposite

// Ex: unbalancedArray([-1, 4, 1, 5, -4, 5, -5, 3, -3, 7, -7]) -> 5

// Ex: unbalancedArray([12, 1, 21, -21, -1]) -> 12]
// 0 / 2 Tests Passed
// ❌ unbalancedArray([-1,4,1,5,-4]) // it should work with a 5 num example
// expected 5 got undefined
// ❌ unbalancedArray([12,1,14,-21,-1,22,21,-14,-22]) // it should work with an 8 num example
// expected 12 got undefined

let nums = [-1, 4, 1, 5, -4, 5, -5, 3, -3, 7, -7];

let unbalancedArray = function(nums) {

  return nums.reduce((acc, num) => {
    return acc + num; 
  })

  // let sum = 0; 
  // for (let n of nums) {
  //   sum += n; 
  // }
  // return sum; 

}


console.log(unbalancedArray(nums))


const outcast = function(nums){
  return nums.reduce((curr, acc) => curr+acc)
}

console.log(outcast(nums))