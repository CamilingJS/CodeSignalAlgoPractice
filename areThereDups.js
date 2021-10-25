
// Implement a function called areThereDups which accepts a variable number of arguments, 
// and checks whether there are any duplicates among the arugments passed in. 

function areThereDuplicates(n) {
  // good luck. (supply any arguments you deem necessary.)
  let arr = [n]
  let arr1 = []
  for (let i=0; i<arr.length; i++){
      if (arr1[arr[i]] > 0){
          return true
      } else return false 
      
}
console.log(arr1)
}

console.log(areThereDuplicates(1,2,3,3))
