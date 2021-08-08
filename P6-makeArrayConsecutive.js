function makeArrayConsecutive2(statues) {
    let count = 0; 
    statues.sort((a,b)=>(a-b)); 
    for (let i = 0; i < statues.length-1; i++) {
            
            if(statues[i] + 1 === statues[i+1]) {
                console.log("0");
            }   
             if(statues[i] + 1 !== statues[i+1]) {
                statues.push(statues[i]+1);
                count++;
                statues.sort((a,b)=>(a-b));
            }           
    }
    return count; 
    
    }
    