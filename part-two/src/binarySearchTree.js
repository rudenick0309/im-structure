const BinarySearchTree = function(value) {
  const binarySearchTree = {};
  binarySearchTree.value = value;
  binarySearchTree.left = null;
  binarySearchTree.right = null;

  binarySearchTree.insert = function(value) {
    if(binarySearchTree.value > value) {
      if(binarySearchTree.left === null) {
        binarySearchTree.left = new BinarySearchTree(value);
      } else {
        binarySearchTree.left.insert(value);
      }
    } else if(binarySearchTree.value < value) {
      if(binarySearchTree.right === null) {
        binarySearchTree.right = new BinarySearchTree(value);
      } else {
        binarySearchTree.right.insert(value);
      }
    }
  };

  binarySearchTree.contains = function(value) {
    if(binarySearchTree.value === value) {
      return true;
    }
    if(binarySearchTree.left !== null && binarySearchTree.left.contains(value)) {
      return true;
    }
    if(binarySearchTree.right !== null && binarySearchTree.right.contains(value)) {
      return true;
    }
    return false;
  };

  binarySearchTree.depthFirstLog = function(func) {
    // pre-order
    func(binarySearchTree.value);
    if(binarySearchTree.left !== null) {
      binarySearchTree.left.depthFirstLog(func);
    }
    if(binarySearchTree.right !== null) {
      binarySearchTree.right.depthFirstLog(func);
    }
  };

  return binarySearchTree;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

module.exports = BinarySearchTree;
