sequence = [1, 2, 1, 2]

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

    return count <= 1; 
}

console.log(almostIncreasingSequence(sequence)); 

