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
	  
	  if(this.head === null){
	  	this.head = newNode;
		this.tail = newNode;
		this.length++;
		return;
	  }
	
		
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  /** pop(): return & remove last item. */

	pop() {
		if(this.head === null || this.length === 0) return `Empty Linked List`;

		if(this.length === 1){ //if only 1 ele in list
			const remNode = this.head;
			this.head = null;
			this.tail = null;
			this.length = 0;
			return remNode;
		}

		const removedNode = this.tail;
		const endNode = this._getAt(this.length - 2);
		this.tail = endNode;
		this.length--;

		return removedNode;
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
  	const newNode = new Node(val);
  	if(idx < 0 || idx >= this.length) return 'idx out of range'; //doesn't work with empty linkedlist;see **
    
    if(this.length === 1){//for edge case inserting at head, and length = 1;
    	this.head = newNode;
      this.head.next = this._getAt(0);
      this.length++;
      
      return;
    }
    
    if(this.length === 0){//for edge case inserting into empty linkedlist; **
    	this.head = newNode;
      this.tail = newNode;
      this.length++;
      
      return;
    }
    
		const prevIdx = idx <= 0 ? 0 : idx - 1; //if === 0, set to 0
    const nextIdx = idx >= this.length - 1 ? this.length - 1 : idx + 1;
    //const 
    const prevNode = this._getAt(prevIdx);
    const nextNode = this._getAt(nextIdx);
    
    //if nextNode =(obj comparison) prevNode > do something
    //implement edge case later
    
    prevNode.next = newNode;	//for tail edge case do something
    newNode.next = nextNode;    
    this.length++;
    
  }
	
  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {//not working for [1,2] ll,  input: idx = 0
	if(idx < 0 || idx >= this.length) return 'idx out of range'; //doesn't work with empty linkedlist
    
    const prevIdx = idx <= 0 ? 0 : idx - 1; //if === 0, set to 0
    const nextIdx = idx >= this.length - 1 ? this.length - 1 : idx + 1;
    
    const prevNode = this._getAt(prevIdx);
    const nextNode = this._getAt(nextIdx); //returns idx out of range if removing last ele, see getAt() defn
    
    if(this.length === 1){
    	this.head = null;
      this.tail = null;
      this.length--;
      
      return;
    }
    
    if(idx === this.length - 1){//edge case for removing last ele in list
    	this.tail = prevNode;
      prevNode.next = null;
      this.length--;
      
      return;
    }
    
    if(idx === 0){
    	this.head = nextNode;
      this.length--;
      return;
    }
    
    prevNode.next = nextNode;
    this.length--; //regular case of linkedlist length > 1
    
  }

  /** average(): return an average of all values in the list */

   average() {
    let currNode = this.head;
    let currIdx = 0;
		let sum = 0;
    if(this.length === 0) return `Linked List is empty`
    while(currIdx < this.length){
			sum+=currNode.val;
      
     	currNode = currNode.next;
			currIdx++;
     }

	return sum / this.length;
  }
}

const lo = new LinkedList([1,2,3]);
console.log(lo.head.val, lo.head.next.val, lo.tail.val)

module.exports = LinkedList;
