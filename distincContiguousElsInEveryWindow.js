function countContiguousDistinct(k, arr) {

    // helper function
    const uniqueCount = array => {
    return new Set(array).size;
    }
  
    let sol = []
    let maxSum = 0; 
    let tempSum = 0; 
    if(arr.length < k) return null; 
    
    for(let i=0; i<k; i++){
        console.log(uniqueCount(arr))
        sol.push(uniqueCount(arr))
    }
    console.log(sol)

    for(let i = k; i<arr.length; i++){
        tempSum = tempSum - arr[i - k] + arr[i];

        sol.push(uniqueCount(arr))
    }

    console.log(sol)



}
  
  
let arr = [1, 2, 1, 3, 4, 2, 3]
let k = 4 

console.log(countContiguousDistinct(k, arr))