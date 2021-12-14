/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }
	
	/** _getAt(idx): return node at idx. */

  _getAt(idx) {
	let currNode = this.head;
    let currIdx = 0;
    if(currNode === null || idx >= this.length || idx < 0) return `idx out of range`
    while(idx < this.length){
    	if(currIdx === idx) return currNode;
      
      currNode = currNode.next;
      currIdx++;
      
    }
  }

  /** push(val): add new value to end of list. */

  push(val) {
  	const newNode = new Node(val);
  
	if(this.head === null){
		this.head = newNode;
		this.tail = newNode;
		this.length++;
	}else{
		this.tail.next = newNode; //set old tail to new tail
		this.tail = this.tail.next; //update tail
		this.length++;
	}
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
  	const newNode = new Node(val);
		
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
	
  }

  /** shift(): return & remove first item. */

  shift() {
	const shiftedNode = this.head;

	if(this.length === 0) return 'LinkedList Empty';
    
    if(this.length === 1){
      this.head = null;
      this.tail = null;
      length--;
      
      return shiftedNode;
    }
    
    this.head = shiftedNode.next;
		shiftedNode.next = null;
    
    if(this.head.next === null) this.tail = this.head; //if only 1 node left
    
    this.length--;
    
    return shiftedNode;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
	let currNode = this.head;
    let currIdx = 0;
    if(currNode === null || idx >= this.length || idx < 0) return `idx out of range`
    while(idx < this.length){
    	if(currIdx === idx) return currNode.val;
      
      currNode = currNode.next;
      currIdx++;
      
    }
  }
  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
	let currNode = this.head;
    let currIdx = 0;
    if(currNode === null || idx >= this.length || idx < 0) return `idx out of range`
    while(idx < this.length){
    	if(currIdx === idx){
      	 currNode.val = val;
         return;
      }
      
      currNode = currNode.next;
      currIdx++;
      
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

const lo = new LinkedList([1,2,3]);
console.log(lo.head.val, lo.head.next.val, lo.tail.val)

module.exports = LinkedList;
