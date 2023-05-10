let arr = [1,2,3,4, 10]

function maxEl(arr){
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        let el = arr[i]
        if(el>max){
            max = el; 
        }
    }
    return max;
}
console.log(maxEl(arr))