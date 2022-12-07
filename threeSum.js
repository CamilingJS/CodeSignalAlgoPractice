// Given an array of nums of n integers,
// are there elements a, b, c in nums such that a + b + c = 0?
// Find all unique triplets in the array which give the sum of zero 

// Assumption 
    // input CAN have duplicates
    // output triplets must be unique 
    // triplet order does not matter

//Naive solution -- triple nested for loop O(n^3)

//Other solution 
// Pseudo 
    // for every numer in nums
    // while left < right 
    // too low? move left
    // too high? move right 
    // zero? add to output, move both 
let nums = [1,2,3,-1,-2,-3, 1,2,3]
let target = 0
const threeSum = function(nums, target){
    const output = []
    nums.sort((a,b) => a-b)
    for(let i=0; i<nums.length - 2; i++){
        let left = i + 1
        let right = nums.length -1

        //handling duplicates 
        if(i>0 && nums[i] === nums[i-1]) continue


        while(left < right){
            let total = nums[i] + nums[left] + nums[right]
            if(total === target){
                output.push([nums[i], nums[left], nums[right]])

                while(left < right && nums[right-1] === nums[right]){
                    right--
                }
                while(left<right && nums[left+1] === nums[left]){
                    left++
                }

                right--
                left++    
            } else if (total > 0){
                right--; 
            } else {
                left++
            }
        }
    }
    return output 
}

// sorting, innerloop, outerloop
// nlogn + n^2 
// O(n^2) time complexity 
// constant space O(1)

console.log(threeSum(nums, target))

