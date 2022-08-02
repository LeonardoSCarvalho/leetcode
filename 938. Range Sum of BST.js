let rangeSumBST = function(root, low, high) {
  if(!root) return 0
  let sum = 0
  if(root.val >= low && root.val <= high) sum += root.val
  sum += rangeSumBST(root.left, low, high)
  sum += rangeSumBST(root.right, low, high)
  return sum
};