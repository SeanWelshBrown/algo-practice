function branchSums(root) {
  let currentTotal = 0;
	let result = [];
	
	function dfs(node, currentTotal) {
		currentTotal = currentTotal + node.value;
		
		if (!node.left && !node.right) {
			result.push(currentTotal);
			return;
		}
		
		if (node.left) dfs(node.left, currentTotal);
		if (node.right) dfs(node.right, currentTotal);
	}
	
	dfs(root, currentTotal);
	return result;
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}