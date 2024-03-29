// Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

// Example

// For text = "Ready, steady, go!", the output should be
// solution(text) = "steady".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string text

// Guaranteed constraints:
// 4 ≤ text.length ≤ 50.

// [output] string

// The longest word from text. It's guaranteed that there is a unique output.

function solution (text){

    let arr = text.match(/([a-z]+)/ig);
    let longestSring = ""
    for(let i=0; i< arr.length; i++){
        let word = arr[i]
        if(word.length > longestSring.length){
            longestSring = word
        }
    }
    return longestSring

}

let text = "Ready, steady, go!"

console.log(solution (text))