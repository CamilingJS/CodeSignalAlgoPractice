// Given an array of numbers and a target,
// return the indices of the numbers that add up to the target

let nums = [3,4,8,2] 
let target = 10

// Edge cases
//  no nums add to target
// Assumptions
// There is always EXACTLY 1 solution 
// numbers can only be used once 

//Naive solution 
const twoSum = function(nums, target){
    for(let i = 0; i<nums.length; i++){
        const num = nums[i]
        const want = target - num
        for(let j = i+1; j < nums.length; j++){
            if(nums[j] === want) return [i, j]
        }
    }
}
// quadratic O(n^2) time complexity
// O(1) space complexity
console.log(twoSum(nums, target))

//Hash table solution 
const twoSumm = function(nums, target){
    const ht = {};
    for(let i=0; i < nums.length; i++){
        const num = nums[i]
        const want = target - num

        //here using bracket notation doesn't work bc if the index is zero it will evaluate to false and it won't got into the if block
        // you can possibly use if(ht[want] != undefined) if it definitely not exist 
        // or use the "in" syntax 
        if(want in ht){
            const leftIndex = ht[want]
            console.log(ht[want])
            return [leftIndex, i]
        } else{
            ht[num] = i; 
        }
    }
}
// linear time complexity 
// linear space -- a trade off between time and space 
console.log(twoSumm(nums, target))

