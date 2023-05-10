

//Given number as an input, print out every integer form 1 to that number. 
//When divisible by 3 print "Fizz"
//When divisible by 5 print "Buzz"

function fizzBuzz(num){
    const answer = []
    for(let i = 1; i<num; i++){
        if(i%3 === 0 && i%5 === 0){
            answer.push('FizzBuzz')
        }
        else if(i%5 === 0){
            answer.push('Buzz')
        }
        else if(i%3 === 0){
            answer.push('Fizz')
        } else {
            answer.push(i.toString())
        }
   
    }

    return answer
  
}
console.log(fizzBuzz(9))

//Given number as an input, print out every integer fr0m 1 to that number. 
//When divisible by 3 print "Fizz"
//When divisible by 5 print "Buzz"
//When divisible by 3 & 5 print "FizzBuzz"

const fuzzBizz = function(num){
    const sol = []
    for(let i=1; i<num ; i++){
        if(num%3 ==0 && num % 5 ==0){
            sol.push('FuzzBizz')
        }
        else if(num%5 == 0){
            sol.push('Buzz')
        }
        else if(num%3 == 0){
            sol.push('Fizz')
        } else {
            sol.push(i.toString())
        }
    }
    return sol
}

console.log(fuzzBizz(9))



const pistBuzz = function (num){
    let msg = []
    for(let i=1; i<=num; i++){
        if(i%3 === 0 && i%5=== 0){
            msg.push("hola") 
        }
        else if(i%3 === 0){
            msg.push("three") 
        }
        else if(i%5 === 0){
            msg.push("five") 
        }
        else {
            msg.push(i.toString())
        }
    }
    return msg
}
console.log(pistBuzz(100))