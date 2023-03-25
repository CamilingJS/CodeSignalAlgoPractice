class ListNode {
    constructor(value){
        this.value = value; 
        this.next = null; 
    }
}

const node = new ListNode(1);
node.next = new ListNode(2);
const head = new ListNode("Zero")
const first = new ListNode("First")
head.next = node
first.next = node
console.log(node)
console.log(first)

// Next is not giving us the value of the next node but a reference to the value of the next node 
// Next is a Pointer to a place in memory 
// All references has the power to change the value of the referenced node e.g. head.next.value = 5 
// When we say set a pointer by reference, the alternative is to make a copy
// the assignment operator or equal sign on objects by default creates a reference which again is a pointer to a memory address
// this pointer is created automatically is a feature of JavaScript and Python, in other languages you have to do it manually
// What's "by reference" vs "by copy"
//      when assigning a primitive value like a number or string 
//      it makes a copy every time it makes an assignment 

console.log(node)


//functional 
function LisNode(value){
    this.value = value;
    this.next = value; 
}

const hi = new LisNode(1)
hi.next = new LisNode(2)
console.log(hi)
const hello = new LisNode(0)
hello.next = hi 
console.log(hello)

//How do we traverse through a linked list...
let on = head; 
while(on !== null){
    console.log(on.val)
    on = on.next
}







