sequence = [1, 1, 1, 2, 3, 4]

function almostIncreasingSequence(sequence) {
    const counter = {}
    for(let num of sequence){
        console.log(counter[num])
        if(counter[num]){
            counter[num]++;
        } else {
            counter[num]=1;
        }
    }
    return counter
}
console.log(counter)
console.log(almostIncreasingSequence(sequence))