const fruits = ['orange', 'orange', 'apple', 'orange', 'apple', 'pear']

const fruitCounts = {};

for (let fruit of fruits) {
  console.log(fruitCounts);
  fruitCounts[fruit] ? fruitCounts[fruit] ++ : fruitCounts[fruit] = 1
  }
console.log(fruitCounts)

const counter = function(arr){
  const ht = {}
  for(let item of arr){
    ht[item] ? ht[item]++ : ht[item]=1
  }
  return ht
  
}
console.log(counter(fruits))

