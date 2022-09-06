const inorderTraversal = function(root) {
  if(!root) {
  return [];
}
const result = [];
const nodesToTraverse = [];
let currentNode = root;
while(nodesToTraverse.length || currentNode) {
  while(currentNode) {
      nodesToTraverse.push(currentNode);
      currentNode = currentNode.left;
  }
  currentNode = nodesToTraverse.pop();
  result.push(currentNode.val);
  currentNode = currentNode.right;
}
return result;
};