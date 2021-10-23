//Write a function called sameFrequency. Given 2 positive integers, find out if the 2 numbers
//have the same frequency digis
//You solution must have the following complexities
//Time: O(n)
// Sampe input
// (182, 281) true
// (34,14) false
//(3589578, 5879385) true
//(22,222) false

let int1 = 3589578
let int2 = 5879385

const sameFrequency = (int1, int2) => {
  let arrInt1 = int1+""
  let arrInt2 = int2+""
  if(arrInt1.length !== arrInt2.length) return false;
  let obj = {}
  for (let i =0; i < arrInt1.length; i++){
    let num = arrInt1[i]
    obj[num] ? obj[num]++ : obj[num] = 1; 
  }
  for(let i=0; i < arrInt2.length; i++){
    let num = arrInt2[i]
    if( !obj[num] ){
      return false; 
    }
    else {
      obj[num] -=1
    } 
  }
  return true
}
console.log(sameFrequency(int1,int2))
