const { LimitedArray, getIndexBelowMaxForKey } = require("./hashTableHelpers");

const HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  const index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  const index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  const index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each((target, i, storage) => {
    if(index === i) {
      storage[i] = undefined;
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

module.exports = HashTable;
