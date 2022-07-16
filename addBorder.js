// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// Example

// For

// picture = ["abc",
//            "ded"]
// the output should be

// solution(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.string picture

// A non-empty array of non-empty equal-length strings.

// Guaranteed constraints:
// 1 ≤ picture.length ≤ 100,
// 1 ≤ picture[i].length ≤ 100.

// [output] array.string

// The same matrix of characters, framed with a border of asterisks of width 1.

picture = ["abc",
           "ded"]

function solution(picture) {
    let width = picture[0].length; 
    
    let firstRow = ""
    let n = 0; 
    while( n<width ){
        firstRow += "*";
        n++;
    }
    console.log(firstRow)
    picture.push(firstRow)
    picture.unshift(firstRow)
    
    console.log(picture)

    let newArr = []
    for(let i =0; i<picture.length; i++){
        let text = picture[i]
        let newText = `*${text}*`
        newArr.push(newText)
    }
    

    return newArr

}
console.log(solution(picture))