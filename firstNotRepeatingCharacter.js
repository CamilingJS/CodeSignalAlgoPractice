// Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

// Example

// For s = "abacabad", the output should be
// solution(s) = 'c'.

// There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

// For s = "abacabaabacaba", the output should be
// solution(s) = '_'.

// There are no characters in this string that do not repeat.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string s

// A string that contains only lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s.length ≤ 105.

// [output] char

// The first non-repeating character in s, or '_' if there are no characters that do not repeat.

// let s = "abacabad"
// function solution(s) {
//     let sortedArr = s.split("")
//                      .sort((a,b)=>{
//                         if(a < b) {return -1;}
//                         if (b < a) {
//                         return 1
//                         }
//                         return 0
//                         }
//                     )
//     console.log(sortedArr)
    
//     for(let i = 0; i < sortedArr.length; i++){
//         letter = sortedArr[i]
//         if(letter !== sortedArr[i+1]){
//             return letter
//         }
        
//     }

// }


let st = "aaabbbcccdddeeefffg"
function solution(st) {
    let obj = {}
    for(let i =0; i<st.length; i++){
        let letter = st[i]
        obj[letter] ? obj[letter]++ : obj[letter]=1; 
    }
    let newStrArr = []
    console.log(obj)
    
    for(letter in obj){
        console.log(letter)
        console.log([letter,obj[letter]])
        
        if(obj[letter] === 1){
            return letter   
        } 
        
    }
    
    return 
   
  }

  console.log(solution(st) )