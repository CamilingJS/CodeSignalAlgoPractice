//What is the ouput

var hero = {
  _name: 'John Doe',
  getSecretIdentiy: function(){
    return this._name; 
  }
}
var stoleSecretIdentity = hero.getSecretIdentiy.bind(hero); 


console.log(stoleSecretIdentity())
console.log(hero.getSecretIdentiy())

