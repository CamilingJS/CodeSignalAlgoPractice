
//Created a function that groups the anagrams of an array of strings so that each anagrams are in their own array

const arr = ['jonathan', 'onathanj', 'john', 'ohnj', 'joy', 'yoj']
let groupAnagrams = function (arr){
    const ht = {}
    for(let str of arr){
        const sortedStr = str.split('').sort().join()
        console.log(sortedStr)
        //if sorted array already exist then push another str in that sorted array
        if(ht[sortedStr]) ht[sortedStr].push(str)
        else ht[sortedStr] = [str]
    }
    //creates an array of the values from ht
    console.log(ht)
    return Object.values(ht);
}

// a sort within a loop // time complexity would be O(n*(m log m))
// keys in a hash table // O(n) linear space 

console.log(groupAnagrams(arr))