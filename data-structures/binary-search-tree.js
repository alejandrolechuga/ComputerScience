function BST() {
 this.root = null; 
}

/**
* add
* @param {Number} value
*/
BST.prototype.node = function (value) {
  return {
    left: null,
    right: null,
    value: value
  };
};


/** 
* add
* @param {Number} value
*/
BST.prototype.add = function (value) {
  var node = this.node(value);
  var current;

  if (this.root === null) {
    this.root = node;
  } else {
    current = this.root;
    while(true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = node; 
        } else {
          current = current.left;
        }
      } else if (value > current.value) { 
        if (current.right === null) {
          current.right = node;
        } else {
          current = current.right;
        }
      } else  {
        break;
      }
    }
  }
};


/**
* contains
* @param {Number} value 
* @return {Boolean} true
*/
BST.prototype.contains = function (value) {
  var found = false;
  var current = this.root; 
  
  while(!found && current) {
    // if the current value is lower than the right value
    if (value < current.value ) {
      // it should go to the left
      current = current.left;
      // if the curent value is greater than 
    } else if (value > current.value ) {
      current = current.right;
    } else {
      // we found an equal
      found = true;
    }
  }
  return found; 
};

// @TODO remove
/** 
* remove
* @param {Number} value
*/
BST.prototype.remove = function (value) {
  var current = this.root;
  var found = false;
  var parent;
  var operation;
  var childCount;

  // find
  while(!found && current) {
    if (value < current.value) {
      parent = current;
      current = parent.left;
    } else if (value > current.value) {
      parent = current;
      current = parent.right;
    } else {
      found = true;
    }
  }
  
  if (found) {
    // @TODO removal in different scenarios
  }
};

var storeBST = new BST();

console.log(storeBST.contains(1));
storeBST.add(1);
console.log(storeBST.contains(1));
console.log(storeBST.add(8));
console.log(storeBST.contains(8));
console.log(storeBST.add(-1));
console.log(storeBST.contains(-1));
console.log('store',storeBST);


