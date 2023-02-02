// 🤔 countOdd
// Given a number, count how many odd numbers are below that number
// Ex: countOdd(5) -> 1, 3 -> returns 2
// Ex: countOdd(10) -> 1, 3, 5, 7, 9 -> returns 5
// 0 / 3 Tests Passed
// ❌ countOdd(5) // It counts up to, but not including an odd num
// expected 2 got undefined
// ❌ countOdd(10) // It also works for an even num
// expected 5 got undefined
// ❌ countOdd(1) // It is zero unless at least 2
// expected 0 got undefined

let n = 13;
const countOdd = function(n) {
  let oddCount = 0; 
  while (n--){
    if (n%2 !=0){
      oddCount++; 
    }
  }
  return oddCount; 

}
console.log(countOdd(n));

const countOddV2 = function(n){
  let count = 0;
  while(n>0){
    if(n%2 !== 0){
      count +=1
    }
  }
  return count
}
console.log(countOddV2(n))
