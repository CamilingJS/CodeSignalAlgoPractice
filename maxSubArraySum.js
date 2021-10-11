//Write a fn called maxSubArraySum which accepts an array
//of integers and a number called n. The fn should calculate
//the maximum sum of n consective elements in the array

let arr = [1,2,5,2,8,1,5]
let num = 3

const maxSubArraySum = (arr, num) => {
  if (num > arr.length){
    return null
  }
  let max = -Infinity; 
  for (let i = 0; i < arr.length - num + 1; i++){
    temp = 0;
    for (let j = 0; j < num; j++){
      temp += arr[i+j];
    }
    if (temp > max){
      max = temp;
    }
  }
  return max; 
}

console.log(maxSubArraySum(arr,num))

const maxSubArrSum = (arr, num) => {
  let maxSum = 0; 
  let tempSum = 0; 
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++){
    maxSum += arr[i]
  }
  tempSum = maxSum; 
  for (let i = num; i < arr.length; i++){
    tempSum = tempSum + arr[i] - arr[i-num];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum; 
}
console.log(maxSubArrSum(arr,num))