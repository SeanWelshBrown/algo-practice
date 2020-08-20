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
}


// TESTS
let node = new Node(20);
node.insert(50)
node.insert(10)
node.insert(8)
node.insert(32)
node.insert(18)
node.insert(5)
node.insert(22)
node.insert(40)

console.log(node.contains(18))