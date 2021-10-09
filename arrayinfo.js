

let arr = [2,3,4]

let arr1 = [1, ...arr, 5]

console.log(arr1)

arr1.unshift(0)
arr1.push(6)

console.log(arr1.slice(4))

// console.log(arr1.splice(1,5))

const obj = {...arr1}


console.log(obj)

console.log(arr1)

let bwarr = arr1.sort((a,b)=>(b-a))
console.log(bwarr)

let evens = bwarr.map((n)=>{
  return (`${Math.random()} + ${n*2}`)
})

console.log(evens)