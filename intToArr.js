// Write a function that takes a number and returns a list of digits. 
//So for 2342 it should return [2,3,4,2]

let num = 2324

const intToArr = (num) => {
  let arrNum = (num+"").split("")
  let ints = arrNum.map(parseFloat)
  return ints; 
}

console.log(intToArr(num))

