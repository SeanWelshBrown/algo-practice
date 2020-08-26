
// Iterative BFS solution; modified levelOrder solution
function zigzagLevelOrder(root) {
    
  let levels = [];
  if (root === null) return levels;
  
  let queue = [root];
  let level = 0;
  while (queue.length > 0) {
      
      levels.push([]);
      
      let levelLength = queue.length;
      for (let i = 0; i < levelLength; i++) {
          let node = queue.shift();
          
          if (node.left !== null) queue.push(node.left);
          if (node.right !== null) queue.push(node.right);
          
          if (level % 2) {
              levels[level].unshift(node.val);
          } else {
              levels[level].push(node.val);
          }
      }
      
      level++;
  }
  
  return levels;
}