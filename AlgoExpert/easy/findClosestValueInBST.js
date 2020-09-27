function findClosestValueInBst(tree, target) {
  let closest = tree.value;
	let difference = Math.abs(target - closest);
	
	let nodeStack = [tree];
	
	while (nodeStack.length) {
		let current = nodeStack.pop();
		
		if (Math.abs(target - current.value) < difference) {
			closest = current.value;
			difference = Math.abs(target - current.value);
		}
		
		if (current.left) nodeStack.push(current.left);
		if (current.right) nodeStack.push(current.right);
	}
	
	return closest;
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}