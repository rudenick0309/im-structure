const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    storage : {},
    front : 0,
    rear : 0
  };

  extend(instance, queueMethods);
  return instance;
};

var extend = function(to, from) {
  for(let key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.rear] = value;
  this.rear += 1;
};

queueMethods.dequeue = function() {
  if (this.rear === this.front) {
    return ;
  }
  return this.storage[this.front++];
};

queueMethods.size = function() {
  return this.rear - this.front;
};

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Queue,
    queueMethods
  };
}
