//Builds up the sort by gradually creating a larger left half which is always sorted
// Start by picking the 2nd in the array 
// Now compare the 2nd element with the one before it and swap if necessary
// Continue ot the next element and if it is in the incorrect order order 
// iterate through the sorted portion (i.e. the left side) to place the elment in the correct place
// Repeat until array is sorted. 
// Good for nearly sorted arrays 


function insertionSort (arr){
    for(let i=1; i<arr.length; i++){
        let currentVal = arr[i]
        for(var j = i-1; j>=0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal
        
    }
    return arr
}

console.log(insertionSort ([-40, 40, -30, 30, -20, 20, -10, 10]))