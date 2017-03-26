/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    return balanceHeight(root) > -1;
};

function balanceHeight(node) {
  if (node === null) return 0;
  var heightLeft = balanceHeight(node.left);
  var heightRight = balanceHeight(node.right);
  if (heightLeft === -1 || heightRight === -1 ) return -1;
  if (Math.abs(heightLeft - heightRight) > 1) return -1;
  return Math.max(heightLeft, heightRight) + 1;
}
