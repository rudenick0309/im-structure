const Queue = function() {
  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {};
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count += 1;
  };

  someInstance.dequeue = function() {
    if(count < 1) {
      return {};
    }
    var deleteObj = storage[0];
    for(let i = 0; i < count; i += 1) {
      storage[i] = storage[i + 1];
    }
    count -= 1;
    return deleteObj;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};

if (typeof module === "object" && typeof module.exports === "object") {
  module.exports = {
    Queue
  };
}
