
let name = "aaron jack"
let getInitials = function(name) {
 return `${name.split(" ")[0][0].toUpperCase()}.${name.split(" ")[1][0].toUpperCase()}`;
  
};

console.log(getInitials(name))
