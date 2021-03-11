function shapeArea(n) {
    let rimAppend = 4; 
    let area = 1; 
    for (let i =2; i<=n; i++){
        area += rimAppend; 
        rimAppend +=4; 
    }
    return area

}