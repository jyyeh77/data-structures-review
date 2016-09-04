let BinarySearchTree = function(value){
  this.value = value;
  this.left;
  this.right;
  this.treeSize = 1;
}

// recursive implementation actually doesn't increment size correctly!
BinarySearchTree.prototype.insert = function(insertVal){
  this.treeSize++;
  let direction = (insertVal < this.value) ? 'left' : 'right';

  if (!this[direction]) this[direction] = new BinarySearchTree(insertVal);
  else this[direction].insert(insertVal);
}

BinarySearchTree.prototype.contains = function(insertVal){
  if (this.value === insertVal) return true;
  let direction = (insertVal < this.value) ? 'left' : 'right';

  return !this[direction] ? false: this[direction].contains(insertVal);
}

BinarySearchTree.prototype.depthFirstForEach = function(callback){
  // in-order implemntation
  // if (this.left) this.left.depthFirstForEach(callback)
  // callback(this.value);
  // if (this.right) this.right.depthFirstForEach(callback);
  // return;

  // pre-order implementation
  // callback(this.value);
  // if (this.left) this.left.depthFirstForEach(callback)
  // if (this.right) this.right.depthFirstForEach(callback);
  // return;

  // post-order
  if (this.left) this.left.depthFirstForEach(callback)
  if (this.right) this.right.depthFirstForEach(callback);
  callback(this.value);
  return;
}

BinarySearchTree.prototype.breadthFirstForEach = function(callback){
  let queue = [];
  queue.push(this);
  while (queue.length > 0){
    callback(queue[0].value);
    let currentNode = queue.shift();
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }
}

BinarySearchTree.prototype.size = function(){
  return this.treeSize;
}
