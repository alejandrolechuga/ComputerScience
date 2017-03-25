function BSTNode(value) {
  return {
    value: value,
    left:  null,
    right: null
  }
}


function insertNode(root, value) {
  if (!root) {
    root = BSTNode(value);
  } else if ( value > root.value ) {
    root.right = insertNode(root.right, value);
  } else {
    root.left = insertNode(root.left, value);
  }
  return root;
}

function Search(node, value) {
  if (node === null) return false;
  if (node.value === value) return true;
  if (value > node.value) {
    return Search(node.right, value);
  } else {
    return Search(node.left, value);
  }
}

(function () {
  var root = insertNode(null, 15);
  insertNode(root, 10);
  insertNode(root, 20);
  insertNode(root, 25);
  console.log('BST DataStructure', root);
  console.log('Search for value');
  console.log('Looking for ', 20,  Search(root, 20));
  console.log('Looking for ', 10,  Search(root, 10));
  console.log('Looking for ', 25,  Search(root, 25));
  console.log('Looking for ', 30,  Search(root, 30));
  console.log('Looking for ', 35,  Search(root, 35));
}());


