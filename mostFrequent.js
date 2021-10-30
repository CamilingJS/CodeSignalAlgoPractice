//fn that creates most frequent word from a string
//where it's not in a banned list 

let paragraph = "A little little bit of this a little bit of that and that is where it is at"
let banned = ["that"] 

const mostFreq = (paragraph, banned)=>{
  let newArr = paragraph.toLowerCase().split(" ") 
  let obj = {}; 
  console.log(newArr)

  for (let i=0; i<newArr.length; i++){
      let currStr = newArr[i]
      obj[currStr] ? obj[currStr]++ : obj[currStr]=1; 
    
  }
  console.log(obj)
  
  let res = Object.keys(obj).reduce((a,b) => obj[a] > obj[b] ? a:b)
  console.log(res)

  return res
}

console.log(mostFreq(paragraph))