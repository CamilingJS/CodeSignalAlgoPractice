function adjacentElementsProduct(inputArray) {
    let prodCount = 0;
    for (let i = 0; i < inputArray.length-1; i++){
        let currProd = inputArray[i] * inputArray[i+1];
        if(currProd > prodCount){
            prodCount = currProd; 
        }
    }
    return prodCount; 
    }