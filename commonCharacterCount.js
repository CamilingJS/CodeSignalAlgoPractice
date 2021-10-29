
let s1 = "aabcc"
let s2 = "adcaa"
function commonCharacterCount(s1, s2){
  let obj = {}
  for(let i = 0; i<s1.length; i++){
    let letter = s1[i]
    obj[letter] ? obj[letter]++ : obj[letter]=1; 
  }
  console.log(obj)


  for (let i =0; i<s2.length; i++){
    let letter = s2[i]
    obj[letter] ? obj[letter]++ : obj[letter]=1; 
  }
  let count = Object.values(obj)
  console.log(count)
  console.log(obj)
}

console.log(commonCharacterCount(s1, s2))

