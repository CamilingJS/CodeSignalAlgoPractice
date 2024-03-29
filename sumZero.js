//write a function called sumZero which accpets a sorted array of integers.
//The function should find teh first pair whre the sum is 0. 
// Return an array that includes both values that sum to zero or undefined 
//if pair does not exist

let arr = [-3,-2,-1,0,1,2,3]

// const sumZero = (arr) => {
//   for(let i=0; i < arr.length; i++){
//     for(let j=0; j <arr.length; j++){
//       if( arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }

const sumZero = (arr) => {
  let left = 0;
  let right = arr.length-1;
  while(left < right){
    let sum = arr[left] + arr[right];
    if (sum === 0){
      return [arr[left], arr[right]]
    } else if (sum > 0){
      right--;
    } else {
      left++; 
    }
  }
}
console.log(sumZero(arr))

