// Instantiate a new graph
const Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
    
  let newArr = [];
  for(let i = 0; i < this.edges.length; i++) {
    newArr.push(0);
  }
  this.edges.push(newArr);

  for(let i = 0; i < this.edges.length; i++) {
    this.edges[i].push(0);
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for(let i = 0; i < this.nodes.length; i++) {
    if(this.nodes[i] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  let index = this.nodes.indexOf(node);
  this.nodes.splice(index, 1);

  for(let i = 0; i < this.edges.length; i++) {
    this.edges[i].splice(index, 1);
  }
  this.edges.splice(index, 1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  let i = this.nodes.indexOf(fromNode);
  let j = this.nodes.indexOf(toNode);
  return this.edges[i][j] === 1;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  let i = this.nodes.indexOf(fromNode);
  let j = this.nodes.indexOf(toNode);
  this.edges[i][j] = 1;
  this.edges[j][i] = 1;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  let i = this.nodes.indexOf(fromNode);
  let j = this.nodes.indexOf(toNode);
  this.edges[i][j] = 0;
  this.edges[j][i] = 0;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.map((ele) => {
    cb(ele);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

module.exports = Graph;
