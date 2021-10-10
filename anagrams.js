//Given two strings, write a function to determine if the second string is
// an anagram of the first. An anagram is a word, phrase, or name formed
// by rearranging the letters of another, such as cinema and iceman

let str1 = "iceman"
let str2 = "cinema"

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length){
    return false; 
  }

  let obj = {}
  
  for (let i = 0; i < str1.length; i++){
    let letter = str1[i]
    obj[letter] ? obj[letter] +=1 : obj[letter] = 1; 
  }

  console.log(obj)

  for (let i = 0; i < str2.length; i++){
    let letter = str2[i]
    if (!obj[letter]){
      return false; 
    } else {
      obj[letter] -=1; 
    }
  }
  return true; 
  }
    
  console.log(isAnagram(str1, str2))





