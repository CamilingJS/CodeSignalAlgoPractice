const fruits = ['orange', 'orange', 'apple', 'orange', 'apple', 'pear']

const fruitCounts = {};

for (let fruit of fruits) {
  console.log(fruitCounts);
  fruitCounts[fruit] ? fruitCounts[fruit] ++ : fruitCounts[fruit] = 1
  }
console.log(fruitCounts)