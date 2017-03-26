/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) return 0;
    var maxDepthLeft = maxDepth(root.left);
    var maxDepthRight = maxDepth(root.right);
    return 1 + Math.max(maxDepthLeft, maxDepthRight);
};
