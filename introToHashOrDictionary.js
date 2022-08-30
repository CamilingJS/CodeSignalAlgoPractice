const fruits = [
    {
      priceInCents: 700, // 0 in JavaScript is falsy
      name: 'Coconut'
    },
    {
      priceInCents: 100,
      name: 'Blueberry'
    },
    {
      priceInCents: 100,
      name: 'Apple'
    },
    {
      priceInCents: 100,
      name: 'Pineapple'
    },
    {
      priceInCents: 100,
      name: 'Orange'
    },
    {
      priceInCents: 1000,
      name: 'Orange'
    },
    {
      priceInCents: 150,
      name: 'Grapes'
    },
    {
      priceInCents: 1000,
      name: 'Grapefruit'
    },
    {
      priceInCents: 500,
      name: 'Mango'
    },
    {
      priceInCents: 1500,
      name: 'Papaya'
    },
  ]



function fruitDict(fruits){
    const fruitMap = {};
    for (let fruit of fruits)
    {
        if(fruitMap[fruit])
        {
            fruitMap[fruit.name].push(fruit.priceInCents)
        } else
        {
            fruitMap[fruit.name] = fruit.priceInCents
        }
    }
    return fruitMap
}

  function searchFruit(fruit, fruits) {
    const fruitMap = fruitDict(fruits)
    if(fruitMap[fruit]){
      return fruitMap[fruit]
    } else {
      return null
    }
  }
  console.log(searchFruit("Apple", fruits))



  




  


