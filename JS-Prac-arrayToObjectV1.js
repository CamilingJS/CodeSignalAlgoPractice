const fruits = ['orange', 'orange', 'apple', 'orange', 'apple', 'pear']

const fruitCounts = {};

for (let fruit of fruits) {
  console.log(fruitCounts);
  if(fruitCounts[fruit]){
    fruitCounts[fruit]++;
  } else {
    fruitCounts[fruit] =1; 
  }
}

console.log(fruitCounts)