//Write a function called productOfArray which takes an 
//array of numbers and returns the product of them all

function productOfArray(){
  for(let i=0; i<arguments.length; i++){
    return product = arguments[i] * arguments[i+1]
    
  }
  console.log(product)
}

console.log(productOfArray([1,2,3]))