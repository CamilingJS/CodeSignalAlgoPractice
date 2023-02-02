const users = [ 
  {username: 'aaron', fullName: 'Aaron Jack', description: 'Software developer'},
  {username: 'jan', fullName: 'Jan Frey', description: 'Shopify developer'},
  {username: 'igor', fullName: 'Igor Kalishnakov', description: 'Massage therapist'},
]

// {username: full user object}

const usersMap = {};

for (let user of users){
  
  usersMap[user.username] = user; 
}

// console.log(usersMap);

const objMaker = function(arr){
  const ht = {}
  for(let key of arr ){
    ht[key.description] = key; 
  }
  
  return ht
}
console.log(objMaker(users))