const extend = function(to, from) {
  for(let key in from) {
    to[key] = from[key];
  }
};

const Tree = function(value) {
  const newTree = {};
  newTree.value = value;

  newTree.children = [];

  extend(newTree, treeMethods);
  return newTree;
};

const treeMethods = {};

treeMethods.addChild = function(value) {
  let tree = new Tree(value);
  this.children.push(tree);
};

treeMethods.contains = function(target) {
  let findTarget = (target, newChildren) => {
    for(let i = 0; i < newChildren.length; i++) {
      if(newChildren[i].value === target) {
        return true;
      } else if(findTarget(target, newChildren[i].children)) {
          return true;
      }
    }
    return false;
  };

  if(this.value === target) {
    return true;
  } else {
    return findTarget(target, this.children);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

module.exports = Tree;
