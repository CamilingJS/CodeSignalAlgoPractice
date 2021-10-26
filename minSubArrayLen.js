// Write a fn which accepts 2 parameters, an array of positive integers and a positive integers
// This fn should return the length of a contigious subarray of which the sum is
// greater than or equal to the integer passed to the fn. If there isn't one, return 0. 

let nums = [2,3,1,2,4,3]
let n = 7; 

function minSubArrayLen (nums, n){
  let total = 0;
  let start = 0;
  let end = 0;  
  let minLen = Infinity; 

  while (start < nums.length){
    //if current window doesn't add up to the given sum then move the window to right
    if(total < start && end < nums.length) {
      total += nums[end];
      end++
    }
    //if current window adds up to at least the sum given then we can shrink the window 
    else if(total >= start){
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++; 
    }
    //current total less than required total but we reach the end 
    else {
      break; 
    }
  }
  return minLen === Infinity ? 0 : minLen; 
}

console.log(minSubArrayLen(nums, n))

function subArray(n, nums){
  let result = Infinity
  let left = 0;
  let sum = 0; 
  
  for(let i=0; i<nums.length; i++){
    sum+=nums[i]
    while(sum >= n){
      result = Math.min(result, i-left+1)
      sum -= nums[left++]
    }
  }
  return result === Infinity ? 0 : result; 
}

console.log(subArray(n, nums))
