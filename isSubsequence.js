// Write a fn which takes in two strings and checks whether the 
// characters is the first string form a subsequence of the characters in the second string. 
// In other words, the fn should check whether the characters in the first string appear somewhere
// in the second string, without order changin. 

let str1 = 'hello'
let str2 = 'hello world'

const isSubsequence1 = (str1, str2) => {
  let i = 0;
  let j = 0;
  if(!str1) return true; 
  while(j < str2.length){
    if(str2[j] === str1[i]) i++;
    if(i === str1.length) return true; 
    j++
  }
  return false; 
}

console.log(isSubsequence1(str1,str2))

//Recursive but no O(1)
function isSubsequence(str1,str2){
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
  return isSubsequence(str1, str2.slice(1))
}
console.log(isSubsequence(str1,str2))
