// Remove nth node from end of list 
// Given a linked list, remove the nth node from the end of the list and return its head

// point "around" a node to delete it 
// .next chaining 

// pointer method with while loop 

// n is the index from the end/tail

//1. count length
//2. calculate delete index
//3. traverse & delete node 


//pseudo code 
// traverse through list, following ".next"
// => count each node to get length 
// get LEFT index (length-n-1)
// traverse, point AROUND node 

function ListNode(val){
    this.val = val; 
    this.next = null; 
}

const removeNthFromEnd = function(head, n){
    //1. measure length 
    let on = head; 
    let length = 1; 
    while(on){
        length++
        on = on.next 
    }
    let leftIndex = length - n -1; 

    //3. handle head deleted
    if(leftIndex === 0){
        return head.next; 
    }
    //2. point around to delete node 
    on = head; 
    while (leftIndex-- > 1){
        on = on.next; 
    }
    on.next = on.next.next;
    return head;  
};



// O(n) linear time complexity 
// O(1) constant space 

