// Selection Sort is similar to Bubble Sort but instead of placing large values into sorted position
// it places small values into sorted position 
// swaps the smallest element to the first index 
// We are saving the indexes 
// Selection is not the most efficient
// 

function selectionSort (arr){
    const swap =(arr, indx1, indx2)=>{
        [arr[indx1],arr[indx2]]=[arr[indx2], arr[indx1]]
    }

    for(let i = 0; i<arr.length; i++){
        let min = i
        for(let j = i+1; j<arr.length; j++){
            if(arr[j]< arr[min]){
                min = j
            }
        }
        if(i !== min){
            swap(arr, i, min)
        }
        
    }
    return arr

}
console.log(selectionSort([4,3,2,1,-1,-2,-3,-4]))



function selectionSort(arr) {
    // loop through array with index i
    for(let i = 0; i < arr.length; i += 1) {
      // find the minIdx from i to length - 1
      const minIdx = findMinIndex(arr, i, arr.length - 1)
      // minIdx is the smallest of all unsorted
    
      // if i !== minIdx
      if(i !== minIdx) {
        // swap them
        swap(arr, i, minIdx)
      }
    }
    // return array
    return array
  }


