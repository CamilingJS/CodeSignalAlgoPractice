function countContiguousDistinct(k, arr) {
   
    let temp = [];
    let result = [];
    
    // helper function
    const uniqueCount = array => {
      return new Set(array).size;
    }
    
    
    for (let i = 0; i < arr.length; i++) {
      temp.push(arr[i]);
      if(temp.length === k) {
        result.push(uniqueCount(temp));
        // remove first item for next iteration
        temp.shift();
      }
    }
    
    return result;
    
    
  }
  
  
let arr = [1, 2, 1, 3, 4, 2, 3]
let k = 4 

console.log(countContiguousDistinct(k, arr))