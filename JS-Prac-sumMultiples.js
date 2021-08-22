// 🤓 sumMultiples
// Given a number, count how many numbers below it are multiples of 3 or 5
// Then, sum those multiples together
// Ex: sumMultiples(10) -> 3 + 5 + 6 + 9 -> returns 23
// Ex: countOdd(5) -> 1, 3 -> returns 2
// 0 / 3 Tests Passed
// ❌ sumMultiples(10) // it works for a simple case
// expected 23 got undefined
// ❌ sumMultiples(200) // it works for a medium sized num
// expected 9168 got undefined
// ❌ sumMultiples(2000) // it doesnt break for a large num
// expected 931668 got undefined

let n = 10;

var sumMultiples = function(n) {
  let counter = 0; 
  while(n--){

    if (n%3 ==0 || n%5 ==0){
      counter += n; 
    }
 
 
  }
  return counter; 
}

console.log(sumMultiples(n));
