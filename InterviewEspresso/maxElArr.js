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

let arrr = [1,1,2,2,3,3,4,4]
let what = Array.from(new Set(arrr))
console.log(what)
console.log(typeof what)
console.log(arrr.slice(-3))

const arrrObj = {...arrr}
console.log(arrrObj)

const arrArray = Object.values(arrrObj)

console.log(arrArray)

