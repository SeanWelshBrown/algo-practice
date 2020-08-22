
// Recursive DFS solution
const isValidBST = function(node, min = null, max = null) {
    
  // Edge case for empty tree
  if (!node) return true;
  
  if (min !== null && node.data <= min) return false;
  if (max !== null && node.data >= max) return false
  
  if (node.left && !isValidBST(node.left, min, node.data)) return false;
  if (node.right && !isValidBST(node.right, node.data, max)) return false;
  
  return true;
};


// Iterative DFS solution
function isValidBST3(treeRoot) {
  
  const nodeStack = [];
  nodeStack.push({
    node: treeRoot,
    min: -Infinity,
    max: Infinity
  });
  
  while (nodeStack.length) {
    const { node, min, max } = nodeStack.pop();
    
    if (node.value <= min || node.value >= max) {
      return false;
    }
    
    if (node.left) {
      nodeStack.push({
        node: node.left,
        min: min,
        max: node.value
      })
    }
    
    if (node.right) {
      nodeStack.push({
        node: node.right,
        min: node.value,
        max: max
      })
    }
  }
  
  return true;
}


// Iterative DFS solution #2 using In Order traversal
const isValidBST2 = function(node) {
    
  let stack = [];
  let inOrder = -Infinity;
  
  while (stack.length > 0 || node) {
      while (node) {
          stack.push(node);
          node = node.left;
      }
      
      node = stack.pop();
      
      if (node.data <= inOrder) return false;
      inOrder = node.data;
      node = node.right;
  }
  
  return true;
}





module.exports = isValidBST;