function almostIncreasingSequence(sequence) {
  sequence.sort((a,b)=>(a-b)); 
  
  console.log(`before loop ${sequence}`)
  const unique = Array.from(new Set(sequence));
  // if (sequence.length === unique.length) {
  //     return false; 
  // }
  for (let i = 0; i < sequence.length; i++) {
      if (sequence[i] >= sequence[i+1]) {
          console.log('false');
          return false; 
      } if (sequence[i+1] = sequence[i-1]) {
          console.log('true');
          return true; 
      }
      
     
  }
  
}
