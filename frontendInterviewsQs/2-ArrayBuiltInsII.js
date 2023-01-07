// nextToDuplicate
// Given an array of numbers, return true if a given number occurs next to a duplicate of itself in the array.
// Examples
// nextToDuplicate([1, 2, 3, 3, 4, 5], 3) // true
// nextToDuplicate([1, 2, 3, 3, 4, 5], 2) // false

const nextToDuplicate = function(arr, num){
    if(!Array.isArray(arr)) return false; 
    return arr.some((curr, i) => curr === num && curr === arr[i+1]);
}
console.log(nextToDuplicate([1, 2, 3, 3, 4, 5], 3))

// moveNegatives
// Given an array of negative and positive numbers, move all negative numbers to the front of the array while maintaining the order of all numbers.
// Examples
// moveNegatives([1, -3, 3, -4, 5]) // [-2, -4, 1, 3, 5]
// moveNegatives([1, 2, 3, 4, 5]) // [1, 2, 3, 4, 5]

const moveNegatives = function(arr){
    if(!Array.isArray(arr)) return []; 
    return arr.filter((num) => num < 0).concat(arr.filter((num) => num >=0))
}
console.log(moveNegatives([1, -3, 3, -4, 5]))



// getStats
// Given an array of numbers, return an object with the sum, average, min, and max of the array.
// Examples
// getStats([1, 2, 3, 4, 5]) // { sum: 15, average: 3, min: 1, max: 5 }
// getStats([1, 2, 3, 4, 5, 6]) // { sum: 21, average

const getStats = function(arr){
    if(!Array.isArray(arr) || arr.length === 0) return false 
    return{
        sum: arr.reduce((acc, curr) => acc + curr, 0),
        average: arr.reduce((acc, curr) => acc + curr, 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
    }
}
console.log(getStats([1, 2, 3, 4, 5, 6]))


