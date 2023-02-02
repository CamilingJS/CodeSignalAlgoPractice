// 💬 countVowels
// Given a string, count the vowels and return that count
// Ex: countVowels("adsbecdei") -> a, e, e, i -> 4
// Ex: unbalancedArray("ffjnkjnj") -> no vowels -> 0
// 0 / 2 Tests Passed
// ❌ countVowels("adsbecdei") // should work with multiple vowels
// expected 4 got undefined
// ❌ countVowels("ffjnkjnj") // should work with no vowels
// expected 0 got undefined

let s = "adsbecdeiuo";


let countVowels = function(s) {
  let vowelCounter = 0; 
  let sArr = s.split("")
  console.log(sArr)
  for(let i=0; i < sArr.length; i++){
    console.log(sArr[i])
    if (sArr[i] == 'a'  ||  
        sArr[i] == 'e'  ||  
        sArr[i] == 'i'  ||
        sArr[i] == 'o'  ||
        sArr[i] == 'u'  ){
      vowelCounter++
    }
  }
  return vowelCounter
}


console.log(countVowels(s))

const vowelCountah = function(s){
  let count = 0; 
  const vowels = ["a", "e", "i", "o", "u"]
  for(let i=0; i<s.length; i++){
    let char = s[i]
    if(vowels.includes(char)){
      count += 1
    }
  }
  return count
}
console.log(vowelCountah(s))