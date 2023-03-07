  const array = [1,2,3,4,5]

  /*
    Exercise 1/5
    Use array.reduce to return the sum of all the numbers in the array
    The function should return 0 if the array is empty 
  */
  export function sumArray(array) {
    return array.reduce((curr, acc)=>(curr + acc))
  }
  console.log(sumArray(array))
  
  /* 
    Exercise 2/5
    Use array.reduce to return the product of all the numbers in the array
    The function should return 1 if the array is empty 
  */
  export function productArray(array) {
    return array.reduce((curr,acc)=> curr*acc,  1)
  }
  console.log(productArray(array))
  /*
    Exercise 3/5
    Use array.reduce to return the largest number in the array
    The function should return -Infinity if the array is empty
  */
  export function maxArray(array) {
    return array.reduce((curr, acc)=> Math.max(curr,acc), -Infinity )
  }
  console.log(maxArray(array))
  
  /*
    Exercise 4/5
    Use array.reduce to return the smallest number in the array
    The function should return Infinity if the array is empty
  */
  export function minArray(array) {
    return array.reduce((curr, acc)=> Math.min(curr,acc), Infinity )
  }
  console.log(minArray(array))
  
  /* 
    Exercise 5/5
    Use array.reduce to return the average of all the numbers in the array
    The function should return 0 if the array is empty
  */
  export function averageArray(array) {
    return array.reduce((curr, acc)=>{
        return curr+acc
    }, 0)/array.length || 0; 
  }
  console.log(averageArray(array))
  