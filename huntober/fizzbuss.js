

//Given number as an input, print out every integer form 1 to that number. 
//When divisible by 3 print "Fizz"
//When divisible by 5 print "Buzz"


function fizzBuzz(num){

    for(let i = 1; i<num; i++){
        if(i%3 === 0 && i%5 === 0){
            console.log('fizzBuzz')
        }
        else if(i%3 === 0){
            console.log('fizz')
        }
        else if(i%5 === 0){
            console.log('buzz')
        } else {
            console.log(i)
        }
   
    }
  
}

fizzBuzz(5)
fizzBuzz(9)
fizzBuzz(15)