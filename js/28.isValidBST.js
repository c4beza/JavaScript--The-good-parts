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
 * @return {boolean}
 */
 var isValidBST = function(root) {
     function Info(min, max, isBST){
        this.min = min;
        this.max = max;
        this.isBST = isBST;
     }

     var isAllBst = function(root){
        if(root == null){
            return null
        }
        let leftInfo = isAllBst(root.left)
        let rightInfo = isAllBst(root.right)
        let min = root.val
        let max = root.val
        if(leftInfo != null){
            min = Math.min(min, leftInfo.min)
            max = Math.max(max, leftInfo.max)
        }
        if(rightInfo != null){
            min = Math.min(min, rightInfo.min)
            max = Math.max(max, rightInfo.max)
        }
        if( (leftInfo == null? true : (leftInfo.isBST && leftInfo.max < root.val)) &&
            (rightInfo == null? true : (rightInfo.isBST && rightInfo.min > root.val))){
            return new Info(min,max,true)
        }else{
            return new Info(min,max,false)
        }
     }

     return isAllBst(root).isBST
};