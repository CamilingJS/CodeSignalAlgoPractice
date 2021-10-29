//fn that creates most frequent word from a string
//where it's not in a banned list 

let paragraph = "A bit of this that that this that at"
let banned = ["that"] 

const mostFreq = (paragraph)=>{
  let newArr = paragraph.toLowerCase().split(" ") 
  let obj = {}; 
  for (let i=0; i<newArr.length; i++){
    let currStr = newArr[i]
    obj[currStr] ? obj[currStr]++ : obj[currStr]=1; 
    
  }
  console.log(obj)
  for (let Key in obj){
    Object.values(obj).filter((element)=>{
      Math.max(element)
    })
    return obj
  }
}

console.log(mostFreq(paragraph))