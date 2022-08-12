// Find the leftmost digit that occurs in a given string.

// Example

// For inputString = "var_1__Int", the output should be
// solution(inputString) = '1';
// For inputString = "q2q-q", the output should be
// solution(inputString) = '2';
// For inputString = "0ss", the output should be
// solution(inputString) = '0'.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A string containing at least one digit.

// Guaranteed constraints:
// 3 ≤ inputString.length ≤ 10.

// [output] char


function solution(inputString) {
    let arr = inputString.split('')
    console.log(arr)
    for(let i =0; i<arr.length; i++){
        console.log(typeof(parseInt(arr[i])))

        if(typeof(parseInt(arr[i])) == Number){
            console.log(parseInt(arr[i]))

        }

    }
}

let inputString = "var_1__Int"
console.log(solution(inputString))