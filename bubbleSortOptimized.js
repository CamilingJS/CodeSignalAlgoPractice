// Introducing no swaps in bubble sort
// What is the Time Complexity of Bubble Sort?
// In general it is N^2 because of the nested loop 
// With noSwap it is O(n)

function bubbleSort(arr){
    function swap (arr, indx1, indx2){
        [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]]
    }
    let noSwaps; 
    for(let i = arr.length; i>0; i--){
        noSwaps = true; 
        for(let j=0; j<i-1; j++){
            if(arr[j]>arr[j+1]){
                swap(arr, j, j+1)
                noSwaps = false
            }
        }
        if(noSwaps) break; 
    }
    return arr
}

console.log(bubbleSort([-2,1,2,4,30,-10]))