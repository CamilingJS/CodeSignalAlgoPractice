//Write a fn called linearSearch which accepts an array and a value, and returns the index at
//which the value exists. If the value does not exist in the array, return -1
//Don't use indexOf to implement this fn


function linerSearch(arr,val){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === val) return i; 
  }
  return -1; 
}

console.log(linerSearch([34,56,1,2], 1))