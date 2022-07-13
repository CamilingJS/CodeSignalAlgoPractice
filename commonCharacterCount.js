
let s1 = "zzzz"
let s2 = "zzzzzzz"
function commonCharacterCount(s1, s2){
  let obj = {}
  let counter = 0; 
  for(let i = 0; i<s1.length; i++){
    let letter = s1[i]
    obj[letter] ? obj[letter]++ : obj[letter] =1; 
  }

  for(let i = 0; i<s2.length; i++){
    let letter = s2[i]
    if (obj[letter]){
      counter++
      obj[letter]--
    }
  }
  return counter; 
}

console.log(commonCharacterCount(s1, s2))

