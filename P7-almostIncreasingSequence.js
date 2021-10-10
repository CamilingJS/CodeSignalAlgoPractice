sequence = [1, 2, 1]

function almostIncreasingSequence(sequence) {
    let count = 0; 
    for (let i = 0; i < sequence.length; i++){
        let current = sequence[i]
        if (current <= sequence[i-1]){
            count++;
            if (current <= sequence[i-2] && sequence[i+1] <= sequence[i-1]){
                return false; 
            }
        }
    }

    if (count <= 1){
        return true; 
    }; 
}

console.log(almostIncreasingSequence(sequence)); 

