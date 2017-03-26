var minDepth = function(root) {
    if (root === null) return 0;
    var minDepthLeft = minDepth(root.left);
    var minDepthRight = minDepth(root.right);
    var min = Math.min(minDepthLeft,minDepthRight);
    if (min === 0 ) {
       return Math.max(minDepthLeft, minDepthRight) + 1;
    } else return min + 1;
};
