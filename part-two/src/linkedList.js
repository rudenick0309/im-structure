const LinkedList = function() {
  const list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newNode = new Node(value);
    if(list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    let newNode = list.head;
    list.head = list.head.next;
    return newNode.value;
  };

  list.contains = function(target) {
    let curNode = list.head;
    while(curNode !== null) {
      if(curNode.value === target) {
        return true;
      }
      curNode = curNode.next;
    }
    return false;
  };

  return list;
};

const Node = function(value) {
  this.value = value;
  this.next = null;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
module.exports = LinkedList;
