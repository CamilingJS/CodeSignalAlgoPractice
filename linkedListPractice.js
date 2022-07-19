class Node {
    constructor(num) {
      this.value = num;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
    
    push(num) {
      const newNode = new Node(num);
      if(this.head == null) {
        this.head = newNode;
      } else {
        this.head.next = newNode;
      }
    }
  }
  
  // Node . value => 5 . next = Node 2
  //.   Node 2 value => 10.  next = null
  
  
  const l = new LinkedList();
  l.push(5)
  l.push(10)
  const x = l.get(0) // 5
  const y = l.get(1) // 10
  const last = l.pop(); // 10 => removes the 10
  const nextLast = l.pop(); // 5 => removes the 5
  const getFirst = l.head(); // null because we popped them away