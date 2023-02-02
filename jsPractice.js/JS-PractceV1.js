
let name = "Jonathan camiling"

let getInitials = function(name) {
 return `${name.split(" ")[0][0].toUpperCase()}.${name.split(" ")[1][0].toUpperCase()}`;
  
};

console.log(getInitials(name))

const getIni = function(name){
    let arr = name.split(" ")
    return `${arr[0][0].toUpperCase()}.${arr[1][0].toUpperCase()}.`
}
console.log(getIni(name))
