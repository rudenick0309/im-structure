const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.front = 0;
  instance.rear = 0;
  instance.storage = {};
};

const queueMethods = {};
queueMethods.enqueue = function(value) {
  this.storage[this.rear] = value;
  this.rear += 1;
}
queueMethods.dequeue = function() {
  if (this.rear === this.front) {
    return ;
  }
  return this.storage[this.front++];
}
queueMethods.size = function() {
  return this.rear - this.front;
}

module.exports = {
  Queue,
  queueMethods
};
