//Implement a fn, called areThereDuplicates which accepts a var of 
//args, and checks whether there are any duplicates amont the args
//passed in. You can solve using the frequency or multi-pointer methods
// Examples: 
//  (1,2,3) false
// (1,2,2) true
// ('a','b','c','a') true




const areThereDuplicates = () => {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;

  } 

console.log(areThereDuplicates(1,2,3))

