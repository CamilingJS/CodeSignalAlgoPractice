//Write a fn that accepts a number n
// and returns teh nth number in the Fibonacci sequence

// 1,1,2,3,5,8,13,21... 

// Non-recursive version
function fib(n){
  if(n<3) return 1; 
  let prev = 1;
  let curr = 1;
  //i=5
  for(let i =2; i<n; i++){
    const next = prev + curr; 
    prev = curr;
    curr = next;
  }
  return curr; 
}
console.log(fib(21))




let f = 5
function fibonacci(f) {
  if (f < 3)
    return 1;
  return fibonacci(f - 1) + fibonacci(f - 2);
}
console.log(fibonacci(f))
