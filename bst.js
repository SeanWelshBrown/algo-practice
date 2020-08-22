// Import validate function from separate file
const isValidBST = require('./validateBst');


class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }


  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    }

    if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (this.data === data) {
      return this;
    }

    if (data < this.data && this.left) {
      return this.left.contains(data);
    } else if (data > this.data && this.right) {
      return this.right.contains(data);
    } else {
      return null;
    }
  }

  printInOrder(node = this) {
    if (node === null) {
      return;
    }
  
    this.printInOrder(node.left);
    console.log(node.data);
    this.printInOrder(node.right);
  }

}



// TESTS
let bst = new Node(20);
bst.insert(50)
bst.insert(10)
bst.insert(8)
bst.insert(32)
bst.insert(18)
bst.insert(5)
bst.insert(22)
bst.insert(40)

bst.printInOrder();

console.log(isValidBST(bst));