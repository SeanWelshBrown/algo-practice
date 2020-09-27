function nodeDepths(root) {
  let depth = 0;
	let total = 0;
	
	function dfs(node, depth) {
		total = total + depth;
		depth++;
		
		if (!node.left && !node.right) return;
		
		if (node.left) dfs(node.left, depth);
		if (node.right) dfs(node.right, depth);
	}
	
	dfs(root, depth);
	return total;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}