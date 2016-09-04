var Queue = function(){
  this.length = 0;
  this.storage = [];

}

Queue.prototype.enqueue = function(obj){
  this.storage.push(obj);
  this.length++;
}
Queue.prototype.dequeue = function(){
  if (this.length > 0) {
    this.length--;
    return this.storage.shift();
  } else {
    return;
  }

}
Queue.prototype.size = function(){
  return this.length;
}
