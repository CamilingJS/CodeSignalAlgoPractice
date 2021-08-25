const users = [ 
  {username: 'aaron', fullName: 'Aaron Jack', description: 'Software developer'},
  {username: 'jan', fullName: 'Jan Frey', description: 'Shopify developer'},
  {username: 'igor', fullName: 'Igor Kalishnakov', description: 'Massage therapist'},
]

// {username: full user object}

const usersMap = {};

for (let user of users){
  console.log(user.username);
  usersMap[user.username] = user; 
}

console.log(usersMap);