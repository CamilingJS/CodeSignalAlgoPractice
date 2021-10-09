// count each charater in a string

let str = "Jjo na than Ca mil ing"


let charCount =(str)=>{
  //make an object and return at end
  let rec = {}
  //else if char is not a number/letter do nothing 
  let str1 = str.toLowerCase().replace(/\s+/g, '')
  
  //loop through string
      for (let i=0; i<str1.length; i++){
        let char = str1[i] 
         //if the char is a number/letter AND is a key in object then add one to count
        if (rec[char] > 0){
          rec[char]++
        } else {
        //if the char is a number/letter AND is not a key in object then add it to our object and set value to 1 
          rec[char] = 1; 
        } 
      }
      // return object at end 
      return rec; 
}

console.log(charCount(str))
console.log(charCount("hello"))
console.log(charCount("hahah "))

let charCount1 = (str) => {
  let rec = {};
  for (let char of str){
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)){
      rec[char] = ++rec[char] || 1;
    }
  }
  return rec; 
}

console.log(charCount1("hello there coding is fun"))