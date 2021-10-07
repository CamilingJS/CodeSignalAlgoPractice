// How do you create a private variable in JavaScript?

function secretVar(){
  var private = "super secret code"
  return function (){
    return private
  }
}

let getPrivateVar = secretVar()

console.log(secretVar())
console.log(getPrivateVar())