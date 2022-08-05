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


