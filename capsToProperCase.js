let paragraph = "WE’VE BEEN WHOLESALING HIGH QUALITY CUSTOM SHOP DECKS, BLANK SKATEBOARD DECKS, CUSTOM APPAREL AND SKATEBOARD ACCESSORIES FOR YOUR BUSINESS FOR ALMOST 20 YEARS! WE SPECIALIZE IN CUSTOM PRINTED SHOP DECKS, BLANK SKATEBOARD DECKS, BLANK SKATEBOARD WHEELS, BLANK SKATEBOARD TRUCKS, BLANK SKATEBOARD BEARINGS, BLANK SKATEBOARD GRIP TAPE, BLANK SKATEBOARD HARDWARE, BLANK SKATE TOOLS, BLANK LONGBOARDS, BLANK CRUISER DECKS, AND BLANK HELMETS AND PADS. WITH SKATEBOARD WAREHOUSE YOU GET PRO QUALITY AT THE LOWEST WHOLESALE PRICES!"

function properCase (str) {
  let arr = str.split(" ")
  console.log(arr)
  let newArr = []
  for(let i = 0; i<arr.length; i++){
    newArr.push(arr[i].toLowerCase())
  }
  
  console.log(newArr)
  let newStr = newArr.join(" ")
  let firstLetter = newStr[0].toLocaleUpperCase()
  let results = newStr.replace(newStr[0], firstLetter)
  
  return results
}

console.log(properCase(paragraph))