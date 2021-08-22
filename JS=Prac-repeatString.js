// 👯 repeatString
// Given a string, duplicate in n times and return a single string

// Ex: repeatString("B", 5) returns "BBBBB"

// Ex: repeatString("Abc", 3) returns "AbcAbcAbc"
// 0 / 3 Tests Passed
// ❌ repeatString("Abc",3) // repeats a multi-char, multi-case string
// expected AbcAbcAbc got undefined
// ❌ repeatString("B",5) // repeats a single-char string
// expected BBBBB got undefined
// ❌ repeatString("hello",2) // repeats a multi-char string
// expected hellohello got undefined

let s = "abc"
let n = 4; 

var repeatString = function(s, n) {

  let str = ""
  while (n--){
    str +=s; 
  } 
  return str; 
  
}

console.log(repeatString(s,n))