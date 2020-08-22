class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}




// DFS iterative
function findSecondLargest(treeRoot) {

  // Helper function to find largest overall
  function findLargest(node) {
    let current = node;
    while (current) {
      if (!current.right) return current.value;
      current = current.right;
    }
  }

  // Primary function logic
  if (!treeRoot || (!treeRoot.left && !treeRoot.right)) {
    throw new Error("Tree must have at least 2 nodes");
  }

  let current = treeRoot;
  while (current) {
    if (current.left && !current.right) {
      return findLargest(current.left);
    }

    if (current.right && !current.right.left && !current.right.right) {
      return current.value;
    }

    current = current.right;
  }
}




// Initial DFS recursive function
function findSecondLargest2(treeRoot) {
  
  if (!treeRoot.left && !treeRoot.right) throw undefined;

  let maxNums = [];
  function traverseTree(node) {
    
    if (maxNums.length === 0) {
      maxNums.push(node.value)
    } else if (maxNums.length === 1) {
      node.value > maxNums[0] ? maxNums.unshift(node.value) : maxNums.push(node.value);
    } else if (maxNums.length === 2) {
      if (node.value >= maxNums[0]) {
        maxNums[1] = maxNums[0];
        maxNums[0] = node.value
      } else if (maxNums[0] > node.value && node.value > maxNums[1]) {
        maxNums[1] = node.value;
      }
    }
    
    if (node.left) {
      traverseTree(node.left);
    }
    if (node.right) {
      traverseTree(node.right);
    }
    
    if (maxNums.length === 2) return maxNums[1];
  }
  
  return traverseTree(treeRoot);
}


















// Tests

let desc = 'full tree';
let treeRoot = new BinaryTreeNode(50);
let leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
let rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
rightNode.insertRight(80);
assertEquals(findSecondLargest(treeRoot), 70, desc);

desc = 'largest has a left child';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
assertEquals(findSecondLargest(treeRoot), 60, desc);

desc = 'largest has a left subtree';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
rightNode = treeRoot.insertRight(70);
leftNode = rightNode.insertLeft(60);
leftNode.insertRight(65);
leftNode = leftNode.insertLeft(55);
leftNode.insertRight(58);
assertEquals(findSecondLargest(treeRoot), 65, desc);

desc = 'second largest is root node';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
rightNode = treeRoot.insertRight(70);
assertEquals(findSecondLargest(treeRoot), 50, desc);

desc = 'descending linked list';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(40);
leftNode = leftNode.insertLeft(30);
leftNode = leftNode.insertLeft(20);
leftNode = leftNode.insertLeft(10);
assertEquals(findSecondLargest(treeRoot), 40, desc);

desc = 'ascending linked list';
treeRoot = new BinaryTreeNode(50);
rightNode = treeRoot.insertRight(60);
rightNode = rightNode.insertRight(70);
rightNode = rightNode.insertRight(80);
assertEquals(findSecondLargest(treeRoot), 70, desc);

desc = 'one node tree';
treeRoot = new BinaryTreeNode(50);
assertThrowsError(() => findSecondLargest(treeRoot), desc);

desc = 'when tree is empty';
treeRoot = null;
assertThrowsError(() => findSecondLargest(treeRoot), desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}