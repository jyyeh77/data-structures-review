var LinkedList = function(){
  this.head;
  this.tail;
}

var Node = function(value, next = null, previous = null){
  this.value = value;
  this.next = next;
  this.previous = previous;
}

LinkedList.prototype.addToHead = function(value){
  // var prevHead;
  if (this.head) prevHead = this.head;
  // console.log("PREVIOUS HEAD: ", prevHead.value);
  this.head = new Node(value);
  if (!this.tail) {
    this.tail = this.head;
  } else {
    this.head.next = prevHead;
    prevHead.previous = this.head;
  }
}

LinkedList.prototype.addToTail = function(value){
  var prevTail;
  if (this.tail) prevTail = this.tail;
  this.tail = new Node(value);

  // if empty linked list, then added tail is also head pointer
  if (!this.tail.previous && !this.head) {
    this.head = this.tail;
    this.tail.next = null;
  }
  // connects new tail to old tail if old tail exists
  if (prevTail) {
    this.tail.previous = prevTail;
    this.tail.next = null;
    prevTail.next = this.tail;
  }
}

LinkedList.prototype.removeHead = function(){
  // handles underflow
  if (!this.head) return;
  // temporary storage of head being removed
  let temp = this.head;

  // sets next pointer of old head as new head if >1 nodes left!
  if (this.head.next) {
    this.head = this.head.next;
    this.head.previous = null;
  } else {
    this.head = null;
    this.tail = null;
  }

  return temp.value;
}

LinkedList.prototype.removeTail = function(){
  if (!this.tail) return;

  let tailToBeRemoved = this.tail;

  if (this.tail.previous){
    this.tail = this.tail.previous;
    this.tail.next = null;
  } else { // if only one node left, set both tail/head pointers to null
    this.tail = null;
    this.head = null;
  }
  return tailToBeRemoved.value;

}

LinkedList.prototype.search = function(searchValue){
  let start = this.head;
  // traverses list until the end (when start is set to null!)
  while (start !== null){
    if (typeof searchValue === 'string') {
      if (typeof start.value === 'string'){
        if (start.value === searchValue) return start.value;
        else start = start.next;
      } else if (typeof start.value === 'object'){
        if (start.value.valueOf() === searchValue) return start.value;
        else start = start.next;
      }
    } else if (typeof searchValue === 'function') {
      if (searchValue(start.value)) return start.value;
      else start = start.next;
    }
  }
  return null;
}
