// Write a function that takes a list of strings and prints them
// one per line in a rectangular frame
// 
let arr = ["Hello", "World", "in", "a", "frame"]

const printFrame = (arr) => {
  for (let str of arr){
    console.log(str)
  }
}
console.log(printFrame(arr))
