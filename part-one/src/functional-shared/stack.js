const Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
    count: 0,
    storage: {},
  };
  extend(obj, stackMethods);
  return obj;
};

var extend = function(to, from) {
  for(let key in from) {
    to[key] = from[key];
  }
};

const stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count += 1;
};

stackMethods.pop = function() {
  if(this.count < 1) {
    return ;
  }
  var deleteObj = this.storage[this.count - 1];
  delete this.storage[this.count - 1];
  this.count -= 1;
  return deleteObj;
};

stackMethods.size = function() {
  return this.count;
};

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Stack,
    stackMethods
  };
}
