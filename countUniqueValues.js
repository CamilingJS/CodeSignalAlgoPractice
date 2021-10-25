//Implement a function called countUniqueValues, which accepts a sorted array,
//and counts the unique values in the array. There can be negative
//numbers in teh array, but will always be sorted

let arr = [1,1,1,1,2,3,2,4,5,5,5,6,7,8,9]

const countUniqueValues = (arr) => {
  if(arr.length ===0) return 0; 
  let count = {}
  for (let i =0; i < arr.length; i++){
    let num = arr[i]
    count[num] ? count[num] +=0 : count[num] =1; 
  }
  console.log((Object.keys(count)))
  return Object.keys(count).length; 

}
console.log(countUniqueValues(arr))

const countUniqueValues1 = (arr) => {
  if(arr.length ===0) return 0; 
  let start = 0; 
  for (let end = 1; end < arr.length; end++){
    if (arr[start] !== arr[end]){
      start ++; 
      arr[start] = arr[end]
    }
  }
  return start;
}
console.log(countUniqueValues1(arr))

