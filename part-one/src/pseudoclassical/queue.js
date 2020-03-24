const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.  
  this.front = 0;
  this.rear = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.rear] = value;
  this.rear++;
};
Queue.prototype.dequeue = function() {
  if (this.rear === this.front) {
    return ;
  }
  return this.storage[this.front++];
};

Queue.prototype.size = function() {
  return this.rear - this.front;
};

module.exports = {
  Queue
};
