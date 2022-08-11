// Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each consecutive pair of strings differ by exactly one character. Return true if it's possible, and false if not.

// Note: You're only rearranging the order of the strings, not the order of the letters within the strings!

// Example

// For inputArray = ["aba", "bbb", "bab"], the output should be
// solution(inputArray) = false.

// There are 6 possible arrangements for these strings:

// ["aba", "bbb", "bab"]
// ["aba", "bab", "bbb"]
// ["bbb", "aba", "bab"]
// ["bbb", "bab", "aba"]
// ["bab", "bbb", "aba"]
// ["bab", "aba", "bbb"]
// None of these satisfy the condition of consecutive strings differing by 1 character, so the answer is false.

// For inputArray = ["ab", "bb", "aa"], the output should be
// solution(inputArray) = true.

// It's possible to arrange these strings in a way that each consecutive pair of strings differ by 1 character (eg: "aa", "ab", "bb" or "bb", "ab", "aa"), so return true.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.string inputArray

// A non-empty array of strings of lowercase letters.

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 10,
// 1 ≤ inputArray[i].length ≤ 15.

// [output] boolean

// Return true if the strings can be reordered in such a way that each neighbouring pair of strings differ by exactly one character (false otherwise).



// let inputArray = ["ab", 
// "ad", 
// "ef", 
// "eg"]
// function solution(inputArray) {
//     let str = []
//     for(let i =0; i<inputArray.length; i++){
//         let vals = inputArray[i].split('')
//         console.log(vals)
        
//         for(let j = 0; j<vals.length; j++){
//             let letter = vals[j]
//             console.log(letter)
//             str.push(letter)
            
            
//         }
        
//     }
//     console.log(str) 
//     let obj = {}
//     for(let i=0; i<str.length; i++){
//         let letter = str[i]
//         obj[letter] ?obj[letter]++ : obj[letter]=1 
//     }
//     console.log(obj)
//     let arrVal = Object.values(obj)
//     console.log(arrVal)
//     let status = false
//     for(let i=0; i<arrVal.length; i++){
//         if(arrVal[i]-arrVal[i+1] == 1 || arrVal[i]-arrVal[i+1] == 0 ){
//             status = true
//         } else{
//             statue = false
//         }
       
//     }
//     return status

// }
// console.log(solution(inputArray))


function solution(inputArray) {
    
    let answer = [];
   permute(inputArray, inputArray.length,answer);
   console.log(answer)
   let result = false;
   for (let i = 0; i < answer.length; i++) {
       for (let j = 1; j < answer[i].length; j++) {
           if ( arrayTest(answer[i][j], answer[i][j-1]) == false ) {
               console.log(answer[i][j])
               break;
           }
           if( j == answer[i].length-1 ){
               return true;
           }
       }
   }
   return false;

}

function arrayTest (str1, str2) {
   if (str1 === str2) {
       return false;
   } 
   let test = false;
   for (let i = 0; i < str1.length; i++) {
       if (str1[i] != str2[i]){
           if (test == false) {
               test = true;
           }else{
               return false;
               
           }
       }
   }
   
   return test
}


function permute(array,k,answer){
   if (k === 1) {
      answer.push([...array])
       
   }else{
       for (let i = 0; i < k;i++){
           permute(array, k-1,answer);
           if (k % 2){
               let x = array[i];
               array[i] = array[k -1];
               array[k -1]=x;
           }else{
               x = array[0];
               array[0] = array[k -1];
               array[k -1]=x;
           }
       }
   }
   

}

console.log(solution(["aba", "bbb", "bab"]))