const nums = [1,2,3,4,5];

const multiplyByTwo = function(array){
  let newArr = [];
  for (let i=0; i < nums.length; i++){
     newArr.push(array[i]*2);      
  }
  return newArr; 
}

console.log(multiplyByTwo(nums));

