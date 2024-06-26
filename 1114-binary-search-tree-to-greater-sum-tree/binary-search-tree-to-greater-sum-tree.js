/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
let sum = 0;
var bstToGst = function(root) {
    
    sum = 0;
    if(root != null) {
        const node = getSumTree(root, 0);
    }

    return root;
};

function getSumTree(node) {

    if(node.right != null) {
        getSumTree(node.right);
    }

    sum += node.val;
    node.val = sum;
    
    if(node.left != null) {
        getSumTree(node.left, sum);
    }

    return node;
}