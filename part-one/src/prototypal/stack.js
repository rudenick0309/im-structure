const Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.count = 0;
  obj.storage = {};
  return obj;
};

const stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count += 1;
}

stackMethods.pop = function() {
  if(this.count < 1) {
    return ;
  }
  var deleteObj = this.storage[this.count - 1];
  delete this.storage[this.count - 1];
  this.count -= 1;
  return deleteObj;
}

stackMethods.size = function() {
  return this.count;
}

module.exports = {
  Stack,
  stackMethods
};
