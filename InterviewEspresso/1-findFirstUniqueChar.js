
//SOLUTION 1
function findFirstUniqueChar(str) {
    const hashTable = {};
    for(let char of str){
        if(hashTable[char]) hashTable[char]++;
        else hashTable[char] = 1; 
    }
    for(let i=0; i<str.length; i++){
        const char = str[i]
        //if unique '==1' then return index 
        if(hashTable[char] == 1) return `${char} at index ${i}`; 
    }
    return -1; 

}

let str = 'jonathanjothx'
console.log(findFirstUniqueChar(str))



//SOLUTION 2
function findFirstUniqChar(str){
    for(let i=0; i<str.length; i++){
        const char = str[i]
        if(str.indexOf(char) === str.lastIndexOf(char)){
            return i; 
        }
    }
    return -1; 
}

console.log(findFirstUniqChar('jonathanjothx'))


let tweet = "jonathanjothx"; 

function fUC(str){
    let hT = {}; 
    for(let char of str){
        if(hT[char]) hT[char]++; 
        else hT[char] =1; 
    }
    for(let i = 0; i<str.length; i++){
        let char = str[i]; 
        if(hT[char]==1) return `${char} is unique at index ${i}`
    }

    return -1
}
console.log(fUC(tweet))