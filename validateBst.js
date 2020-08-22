
// Recursive solution
const isValidBST = function(node, min = null, max = null) {
    
  // Edge case for empty tree
  if (!node) return true;
  
  if (min !== null && node.data <= min) return false;
  if (max !== null && node.data >= max) return false
  
  if (node.left && !isValidBST(node.left, min, node.data)) return false;
  if (node.right && !isValidBST(node.right, node.data, max)) return false;
  
  return true;
};


// Iterative solution using In Order traversal
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