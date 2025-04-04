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
var lcaDeepestLeaves = function(root) {

    function dfs(node) {
        if(!node) {
            return [0, null];
        }

        const left = dfs(node.left);
        const right = dfs(node.right);

        if(left[0] > right[0]) {
            return [left[0] + 1, left[1]];
        }
        if(left[0] < right[0]) {
            return [right[0] + 1, right[1]];
        }
        return [left[0] + 1, node];
    }

    // console.log(dfs(root)[1]);
    return dfs(root)[1];
};