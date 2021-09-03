// A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
// subsequent number is the sum of the previous two.

// For example, the first five Fibonacci numbers are:
//   0 1 1 2 3

// If n were 4, your function should return 3; for 5, it should return 5.

// Write a function that accepts a number, n, and returns the nth Fibonacci
// number. Use a recursive solution to this problem; if you finish with time
// left over, implement an iterative solution.

// example usage:
// nthFibonacci(2); // => 1
// nthFibonacci(3); // => 2
// nthFibonacci(4); // => 3
// etc...

// var array1 = [0,1]
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// for (i=0;i<100;i++){
// array1.push(array1.reduce(reducer))
// }
// console.log(array1)

// edge case:
  //when 0 return 0
// edge case 
  // when
// var nthFibonacci = function(n) {
//   // Your code here
//   if(n === 0) return 0;
//   if (n <=1 ) return 1; 

//   return nthFibonacci(n-1) + nthFibonacci(n-2)

// };

let nthFibonacci = function (num, cache) {
  cache = cache || {};
  if(cache[num]) return cache[num];
  if(num === 0) return 0; 
  if (num < 3) return 1; 
  return cache[num] = nthFibonacci(num - 1, cache) + nthFibonacci(num-2, cache)
}

console.log(nthFibonacci(50))



