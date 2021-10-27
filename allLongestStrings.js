// Given an array of strings, return another array containing all of its longest strings.

let inputArray = ["abc", "ab", "ab", "abd"]

function allLongestStrings(inputArray){
  let largestLength = inputArray[0].length; 
  for(let i =1; i < inputArray.length; i++ ){
    if(largestLength < inputArray[i].length ){
      largestLength = inputArray[i].length; 
    }
  }
  inputArray = inputArray.filter((element)=>{
    return element.length === largestLength
  })
  return inputArray; 
}

console.log(allLongestStrings(inputArray))