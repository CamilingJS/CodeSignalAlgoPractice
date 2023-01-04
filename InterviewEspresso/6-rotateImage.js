// rotate image
// You are given an n x n 2D matrix representing an image 
// Rotate the image by 90 degrees (clockwise)
// You have to rotate the image IN PLACE (no second matrix)

// 123
// 456
// 789

// 741
// 852
// 963

//First REVERSE
//Second Flip Coordinates 

//Pseudo
// Reverse outer arrays
// For each row
    // for each column 
        // flip coordinates 

let matrix = [[1,2,3],[4,5,6],[7,8,9]]

var rotate = function(matrix){
    matrix.reverse() //reverse arr method mutates the array in place
    for(let i=0; i<matrix.length; i++){

        // setting boundary of j<i prevents you from loop over again 
        for(let j=0; j<i; j++){
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
}
// O(n^2) quadratic time complexity 
// O(1) constant space 
console.log(rotate(matrix))

