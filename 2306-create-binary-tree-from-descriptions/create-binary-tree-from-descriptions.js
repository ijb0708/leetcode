/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {

    const parent = {};
    const nodes = {};

    for(item of descriptions) {

        parent[item[1]] = item[0];
        if(!nodes[item[0]]) nodes[item[0]] = new TreeNode(item[0]);
        
        // left
        if(item[2] == '1') {
            if(!nodes[item[1]]) nodes[item[1]] = new TreeNode(item[1]);
            nodes[item[0]].left = nodes[item[1]];
        // right
        }else {
            if(!nodes[item[1]]) nodes[item[1]] = new TreeNode(item[1]);
            nodes[item[0]].right = nodes[item[1]];
        }
    }

    // console.log(parent);
    // console.log(nodes);
    let rootNodeNum = -1;
    // return nodes[findParent(descriptions[0][0])]
    for(key of Object.keys(nodes)) {
        if(parent[key] == null) {
            rootNodeNum = key;
            break;
        }
    }

    return nodes[rootNodeNum];
};