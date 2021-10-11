//Given a sorted array of ints, write a fn called binarySearch
//that accepts a value and returns the index where the value
//passed to the fn is located. If the value is not found, return -1

let arr = [1,2,3,4,5,6]
let val = 2; 

const notBinarySearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === val){
      return i
    } 
  }
  return -1
}

console.log(notBinarySearch(arr,val))

const binarySearch = (arr, val) => {
  let min = 0;
  let max = arr.length -1 ;
  
  while (min <= max){
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if ( arr[middle] < val ){
      min = middle +1; 
    }
    else if (arr[middle] > val ) {
      max = middle -1;
    }
    else {
      return middle; 
    }
  }
  return -1
}

console.log(binarySearch(arr,val))

