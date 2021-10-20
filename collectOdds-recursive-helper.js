
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