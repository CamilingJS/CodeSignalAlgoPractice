// created functions to check if a string is a palindrome - a string spelled that same backwards and forward 

// Naive approach 
const isPalindrome = function(str){
    return str.split('').reverse().join('') === str; 
}
// this is O(n) linear time 
// "implicit" O(n) space 
// this won't work with special characters

console.log(isPalindrome('anbbna'))

// needing to clean the data: 
// regular expression... regex 

const isPalindrome1 = function(str){
    const san = str.replace(/[^\w]/gi, '').toLowerCase()
    return san.split('').reverse().join('') === san; 
}
console.log(isPalindrome1('A mma?'))


// isPalindrome using POINTER METHOD 

const isPalindrome2 = function(str){

    // we are recycling the variable str here.. 
    str = str.replace(/[^\w]/gi, '').toLowerCase()
    
    let left = 0;
    let right = str.length-1;
    while(left < right){
        if(str[left] !== str[right]) return false; 
        left++;
        right--; 
    }
    return true; 

}
// O(n) linear time
// O(1) constant space 
console.log(isPalindrome2('abcddcba'))