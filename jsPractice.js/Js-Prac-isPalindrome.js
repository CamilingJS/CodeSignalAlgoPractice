// ↔️ isPalindrome
// Given a string, determine whether it is a palindrome (same forwards and backwards, case-sensitive)

// Ex: isPalindrome("racecar") returns true

// Ex: isPalindrome("abcd") returns false
// 0 / 3 Tests Passed
// ❌ isPalindrome("racecar") // finds a palindrome
// expected true got undefined
// ❌ isPalindrome("abcd") // rejects non palindromes
// expected false got undefined
// ❌ isPalindrome("Abcba") // is case sensitive
// expected false got undefined
let str = "racecar"

console.log(str.split("").reverse().join(""))

let isPalindrome = function(str) {
 if (str.split("").reverse().join("") === str ){
   return true
 } else {
   return false; 
 }
}
console.log(isPalindrome(str))