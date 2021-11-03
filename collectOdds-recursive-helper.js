
function collectOddValues(arr){
  let result = [];

  function helper(helperInput){
    if(helperInput.length === 0){
      return; 
    }
    if(helper[0] % 2 !==0 ){
      result.push(helperInput[0])
    }
    helper(helperInput.slice(1))
  }
  helper(arr)
  return result; 
}
console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))

//pure recursive method
function collectOddValues1 (arr){
  let newArr = [];
  if(arr.length === 0){
    return newArr; 
  }
  if(arr[0] % 2 !==0){
    newArr.push(arr[0])
  }
  newArr = newArr.concat(collectOddValues1(arr.slice(1)))
  return newArr; 
}
console.log(collectOddValues1([1,2,3,4,5,6,7,8,9]))


//Pure Recursion Tips
//For arrays, use methods like slice, the spread operator, and concaat that makes copies of 
//arrays so you do no mutate them 
//Remember that strings are immutalbe so you will need ot use methods like slice, substr, or 
//substring to make copes of strings
//To make copies of objects use Object.assign, or the spread operator 
