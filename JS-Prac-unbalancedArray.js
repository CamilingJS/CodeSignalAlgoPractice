// ⚖️ unbalancedArray
// Given an array of positive and negative integers, find the number that does not have an opposite

// Ex: unbalancedArray([-1, 4, 1, 5, -4]) -> 5

// Ex: unbalancedArray([12, 1, 21, -21, -1]) -> 12]
// 0 / 2 Tests Passed
// ❌ unbalancedArray([-1,4,1,5,-4]) // it should work with a 5 num example
// expected 5 got undefined
// ❌ unbalancedArray([12,1,14,-21,-1,22,21,-14,-22]) // it should work with an 8 num example
// expected 12 got undefined

let nums = [12, 1, 21, -21, -1];

var unbalancedArray = function(nums) {
  let sortedNums = nums.sort( (a,b) => a-b );
  let arrPos = sortedNums.filter(num => {
    if (num > 0){
      return num; 
    }
  })
  console.log(arrPos)
  let arrNeg = sortedNums.filter(num => {
    if (num < 0) {
      return num; 
    }
  })
  console.log(arrNeg)
  
  for (let i = 0; i < nums.length; i++) {
    const found = arrPos.find(num => {

      if (arrPos[i] + arrNeg[i] != 0){
        return arrPos[i];
  
      }
      console.log(arrPos[i]);
    })
  }

}

console.log(unbalancedArray(nums))