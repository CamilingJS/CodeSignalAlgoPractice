//fn that creates most frequent word from a string
//where it's not in a banned list 

let paragraph = "A little little bit of this a little bit of that and that is where it is at"
let banned = ["that"] 

const mostFreq = (paragraph, banned)=>{
  let newArr = paragraph.toLowerCase().split(" ") 
  let obj = {}; 
  console.log(newArr)
  let currStr = []
  for (let i=0; i<newArr.length; i++){
      currStr = newArr[i]
      if(!banned[currStr]){
      }
      obj[currStr] ? obj[currStr]++ : obj[currStr]=1; 
  }
  console.log(obj)
  
  let res = Object.keys(obj).reduce((a,b) => obj[a] > obj[b] ? a:b)
  console.log(res)

  return res
}

console.log(mostFreq(paragraph))