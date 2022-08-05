// Not the most efficient 
// Largest values bubble up to the top 
// Many sorting algorithms involve some type of swapping
// functionality (e.g. swapping to numbers to put them in order)

function es5Swap (arr, idx1, idx2) {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

const es2015Swap = (arr, idx1, idx2) =>{
    [arr[idx], arr[idx2]] = [arr[idx2], arr[idx1]]
}

//naive solution
function bubbleSort(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[j]>arr[j+1]){
                //SWAP!
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp; 
            }
        }
    }
    return arr
}
console.log(bubbleSort([37,45,29,8]))

//better solution
function bubbleSortA(arr){
    for(let i=arr.length; i>0; i--){
        for(let j=0; j< i-1; j++){
            if(arr[j]>arr[j+1]){
                //SWAP!
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp; 
            }
        }
    }
    return arr
}
console.log(bubbleSortA([37,45,29,8, 8, -12, 2]))

function bubbleSortA1 (arr) {
    const swap = (arr, indx1, indx2) =>{
        [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]]
    }
    for(let i = arr.length; i >0; i--){
        for(let j=0; j < i-1; j++){
            if(arr[j]>arr[j+1]){
                swap(arr, j, j+1)
            }
        }
    }
    return arr; 
}
console.log(bubbleSortA1([30,45,-29,8, 8, -12, 2]))