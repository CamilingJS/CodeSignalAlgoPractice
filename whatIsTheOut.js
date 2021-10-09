// What is the ouput?

var num = 4; 
function outer (){
  var num = 2
  function inner(){
    num++
    var num =3; 
    console.log(num)
  }
  inner();
}
outer(); 

//this is a hoisting question, and scope. num++ can't access num = 2; and so the final out is num = 3 or 3