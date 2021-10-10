//Write a fn called same, which accepts two arrays. 
//The fn should return true if every value in the array has it's corresponding value squared in the 
//second array. The frequency of values must be teh same. 

let arr1 = [1,2,3,4,5,6]
let arr2 = [1,4,9,16,25,36]

const same = (arr1, arr2) => {
  if(arr1.length !== arr2.length){
    return false; 
  }
 
  for (let i = 0; i < arr1.length; i++){
    let val1 = arr1[i]
    let correctIndex = arr2.indexOf(val1 ** 2)
    if (correctIndex === -1){
      return false
    }
    arr2.splice(correctIndex, 1)
  }
  return true; 
}

console.log(same(arr1, arr2))

console.log(same([1,2,3], [1,9,4]))




const same1 = (arr1, arr2) => {
  if (arr1.length !== arr2.length){
    return false; 
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of arr1){
    frequencyCounter2[val] = (frequencyCounter1[val] || 0 ) + 1
  }
  for (let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  for (let key in frequencyCounter1){
    if(!(key ** 2 in frequencyCounter2)){
      return false
    }
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key] ){
      return false
    }
  }  
  return true; 
}

console.log(same1(arr1, arr2))
console.log(same1([1,2,3], [1,4,9]))


