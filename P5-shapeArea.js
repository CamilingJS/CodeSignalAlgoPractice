// ### Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

// ### A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.



// ### Example

// ### For n = 2, the output should be
// ### shapeArea(n) = 5;
// ### For n = 3, the output should be
// ### shapeArea(n) = 13.
// ### Input/Output

// ### [execution time limit] 4 seconds (js)

// ### [input] integer n

// ### Guaranteed constraints:
// ### 1 ≤ n < 104.

// ### [output] integer

// ### The area of the n-interesting polygon.

// ## The area of a 1x1 polygon is 1
// ## The area of a 2x2 polygon is 4
// ## As you add 1 to n of a nxn polygon the multiplyer increases by 4


function shapeArea(n) {
    let rimAppend = 4; 
    let area = 1; 
    for (let i =2; i<=n; i++){
        area += rimAppend; 
        rimAppend +=4; 
    }
    return area

}