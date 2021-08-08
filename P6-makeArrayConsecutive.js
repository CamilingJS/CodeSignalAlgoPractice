let statues = [6, 2, 3, 8];

function makeArrayConsecutive2(statues) {
  let count = 0; 
  statues.sort(); 
  for (let i = 0; i < statues.length-1; i++) {
           if(statues[i] + 1 !== statues[i+1]) {
              statues.push(statues[i]+1);
              count++;
              statues.sort();
          } else if (statues[i] === statues[i+1]) {
              count + 0; 
          } else if (statues.length === 1) {
              count + 0; 
          }
  }
  return count; 
  }