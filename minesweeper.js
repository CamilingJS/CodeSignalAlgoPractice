// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

// Example

// For

// matrix = [[true, false, false],
//           [false, true, false],
//           [false, false, false]]
// the output should be

// solution(matrix) = [[1, 2, 1],
//                        [2, 1, 1],
//                        [1, 1, 1]]
// Check out the image below for better understanding:



// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.array.boolean matrix

// A non-empty rectangular matrix consisting of boolean values - true if the corresponding cell contains a mine, false otherwise.

// Guaranteed constraints:
// 2 ≤ matrix.length ≤ 100,
// 2 ≤ matrix[0].length ≤ 100.

// [output] array.array.integer

// Rectangular matrix of the same size as matrix each cell of which contains an integer equal to the number of mines in the neighboring cells. Two cells are called neighboring if they share at least one corner.

let matrix = [[true, false, false],
              [false, true, false],
              [false, false, false]]

function solution(matrix) {
  
  const board = []
  for(let x=0; x < matrix.length; x++){
      board.push([])
      for(let y = 0; y < matrix[0].length; y++){
          board[x][y]=0
          //Above
          if(matrix[x-1] !== undefined){
              if(matrix[x-1][y]){
                  board[x][y]++
              }
          }
          //Below
           if(matrix[x+1] !== undefined){
              if(matrix[x+1][y]){
                  board[x][y]++
              }
          }
          //Left
           if(matrix[x][y-1] !== undefined){
              if(matrix[x][y-1]){
                  board[x][y]++
              }
          }
          //Right
           if(matrix[x][y+1] !== undefined){
              if(matrix[x][y+1]){
                  board[x][y]++
              }
          }
          //TopLeft
          if(matrix[x-1] !== undefined){
              if(matrix[x-1][y-1]){
                  board[x][y]++
              }
          }
          //TopRight
          if(matrix[x-1] !== undefined){
              if(matrix[x-1][y+1]){
                  board[x][y]++
              }
          }
          //bottomLeft
          if(matrix[x+1] !== undefined){
              if(matrix[x+1][y-1]){
                  board[x][y]++
              }
          }
          //bottomRight
          if(matrix[x+1] !== undefined){
              if(matrix[x+1][y+1]){
                  board[x][y]++
              }
          }
          
      }
  }
  return board

}

console.log(solution(matrix) )