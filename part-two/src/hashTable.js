const { LimitedArray, getIndexBelowMaxForKey } = require('./hashTableHelpers');

const HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
  this._maxCount = this._limit * 0.75;
  this._minCount = this._limit * 0.25;
};

HashTable.prototype.insert = function(k, v) {
  const index = getIndexBelowMaxForKey(k, this._limit);
  let dataPair = [k, v];
  this._storage.set(index, dataPair);
  this._count++;
  if(this._count > this._maxCount) {
    this.resize(true);
  }
};

HashTable.prototype.retrieve = function(k) {
  const index = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(index) !== undefined) {
    return this._storage.get(index)[1];
  } else {
    return undefined;
  }
};

HashTable.prototype.remove = function(k) {
  const index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each((target, i, storage) => {
    if(index === i) {
      storage[i] = undefined;
      this._count--;
      if(this._count < this._minCount) {
        this.resize(false);
      }
    }
  });
};

HashTable.prototype.resize = function(bIncrease) {
  this._limit *= bIncrease ? 2 : 0.5;
  this._maxCount = this._limit * 0.75;
  this._minCount = this._limit * 0.25;

  let oldStorage = this._storage;
  this._storage = LimitedArray(this._limit);
  oldStorage.each((target) => {
    if(target !== undefined) {
      const index = getIndexBelowMaxForKey(target[0], this._limit);
      this._storage.set(index, target);
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

module.exports = HashTable;
