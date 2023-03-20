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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if(!subRoot) return true
    if(!root) return false
    if(sameTree(subRoot,root)) return true
    return (isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot))
};

function sameTree(root,subRoot){
    if(!root && !subRoot)
        return true
    if(subRoot && root && subRoot.val == root.val){
        return (sameTree(root.left,subRoot.left) && sameTree(root.right,subRoot.right))
    }
    return false
}