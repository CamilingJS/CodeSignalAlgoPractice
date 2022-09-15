// Elections are in progress!

// Given an array of the numbers of votes given to each of the candidates so far, and an integer k equal to the number of voters who haven't cast their vote yet, find the number of candidates who still have a chance to win the election.

// The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.

// Example

// For votes = [2, 3, 5, 2] and k = 3, the output should be
// solution(votes, k) = 2.

// The first candidate got 2 votes. Even if all of the remaining 3 candidates vote for him, he will still have only 5 votes, i.e. the same number as the third candidate, so there will be no winner.
// The second candidate can win if all the remaining candidates vote for him (3 + 3 = 6 > 5).
// The third candidate can win even if none of the remaining candidates vote for him. For example, if each of the remaining voters cast their votes for each of his opponents, he will still be the winner (the votes array will thus be [3, 4, 5, 3]).
// The last candidate can't win no matter what (for the same reason as the first candidate).
// Thus, only 2 candidates can win (the second and the third), which is the answer.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer votes

// A non-empty array of non-negative integers. Its ith element denotes the number of votes cast for the ith candidate.

// Guaranteed constraints:
// 4 ≤ votes.length ≤ 105,
// 0 ≤ votes[i] ≤ 104.

// [input] integer k

// The number of voters who haven't cast their vote yet.

// Guaranteed constraints:
// 0 ≤ k ≤ 105.

// [output] integer


function naiveSolution(votes, k) {
    let winners = []
    
    let arrVotes = votes.sort((a,b) => a-b)
    console.log(arrVotes)

    
    for(let i =0; i<arrVotes.length; i++){
        let num = arrVotes[i];
        if(k == 0 ){
            winners.push(arrVotes[arrVotes-1])
            break
        }
        if(num+k > arrVotes[arrVotes.length-1]){
            winners.push(num)
            console.log(winners)
        } 
    }
    console.log(winners)
    return winners.length; 
}
let votes = [2, 3, 5, 2];
let k = 0; 

console.log(solution(votes, k))


function solution(votes, k) {
    let max=Math.max(...votes)
    let r=votes.filter(x=>x+k>max||x===max).length
    return k?r:r==1?1:0
  }

  function solution1(votes, k) {
    // find the most voted
   const max = Math.max(...votes);
   
   let count = 0
   
   // if there are no votes left
   if (k === 0) {
       
       // if the most voted is unique return 1
       //   otherwise 0
       for (vote of votes)
           if (vote === max)
               count ++
       
       return count === 1 ? 1 : 0
   }

   // those who added all the remaining votes can surpass the most voted could potentially win
   for (vote of votes)
       if (max < vote + k)
           count++
   
   return count;
}

  
