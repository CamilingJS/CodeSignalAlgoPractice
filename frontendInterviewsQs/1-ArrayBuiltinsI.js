// Array Builtins I
// Prompt:Complete the 4 problems in this set by only making use of built-in Javascript Array methods.
// Do not use for-loops to solve any of these problems.

// QUESTION 1: ************************************
// isAllOdd
// Write a function that returns whether or not an array is made up of only odd numbers.
// Example
// allOdd([1, 3, 5, 7]); // true
// allOdd([1, 2, 3, 5, 7]); // false
// allOdd([2, 4, 6, 8]); // false
// allOdd([]); // true

const isAllOdd = function (arr){
    return arr.every((num) => num%2 !==0 )
}
console.log(isAllOdd([1, 3, 5, 7]))


// QUESTION 2: ************************************
// isPalindrome
// Given an array of values, determine if the array values are a palindrome.
// A palindrome is a word, phrase, or sequence that reads the same backward as forward.
// Example
// isPalindrome([1, 2, 3, 2, 1]); // true
// isPalindrome([1, 2, 3, 4, 5]); // false
// isPalindrome(["train", "car", "boat", "car", "train"]); // true
// isPalindrome([]); // true

const isArrPalindrome = function (arr){
    return arr.join("") === arr.reverse().join("")
}
console.log(isArrPalindrome(["train", "car", "boat", "car", "train"]))



// QUESTION 3: ************************************
// findDuplicates
// Find and return all duplicates in a given array.
// Example
// findDuplicates(["a", "b", "c", "b", "a", "d", "e", "d", "f"]);
// // => ["a", "b", "d"]
// findDuplicates([1, 2, 3, 3]);
// // => [3]
// findDuplicates([]);
// // => []

const findDuplicates = function(arr){
    const duplicates = arr.filter((el, index) => {
        return arr.indexOf(el) !== index
    } )
    return [...new Set(duplicates)]
}
console.log(findDuplicates(["a", "b", "c", "b", "a", "d", "e", "d", "f"]))


// QUESTION 4: ************************************
// filterByKeyValue
// Given a list of objects, filter the list to only include objects whose property values match the given key-value pairs.
// Example
// const arr = [
//   { name: "John", age: 20 },
//   { name: "Jane", age: 20 },
//   { name: "John", age: 21 },
// ];
// filterByKeyValue(arr, { name: "John" });
// // => [{ name: "John", age: 20 }, { name: "John", age: 21 }]
// filterByKeyValue(arr, { name: "John", age: 20 });
// // => [{ name: "John", age: 20 }]
// filterByKeyValue(arr, { age: 20 });
// // => [{ name: "John", age: 20 }, { name: "Jane", age: 20 }]

const filterByKeyValue = function (arr, obj){
    return arr.filter((item)=>{
        return Object.keys(obj).every((key) => item[key] === obj[key])
    })
}

const arr = [
  { name: "John", age: 20 },
  { name: "Jane", age: 20 },
  { name: "John", age: 21 },
];

console.log(filterByKeyValue(arr, { age: 20 }))


