
// Iterative solution, BFS
function levelOrder(root) {
  
  let levels = [];
  if (root === null) return levels;
  
  let queue = [root];
  let level = 0;
  while (queue.length > 0) {
      
      levels.push([]);
      
      let levelLength = queue.length;
      for (let i = 0; i < levelLength; i++) {
          let node = queue.shift();
          
          levels[level].push(node.val);
          
          if (node.left !== null) queue.push(node.left);
          if (node.right !== null) queue.push(node.right);
      }
      
      level++;
  }
  
  return levels;
}


// Recursive solution, DFS
function levelOrder2(root) {
  let levels = [];
  
  function helper(node, level) {
      if (levels.length === level) {
          levels.push([]);
      }

      levels[level].push(node.val);
      
      if (node.left !== null) helper(node.left, level + 1);
      if (node.right !== null) helper(node.right, level + 1);
  }
  
  if (root === null) return levels;
  helper(root, 0);
  return levels;
};
