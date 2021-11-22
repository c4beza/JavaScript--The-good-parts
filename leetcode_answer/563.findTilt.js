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
 * @return {number}
 */
 var findTilt = function(root) {
     let max = 0
     var tilt = function(root){
         if(root == null) return 0
         let leftInfo = tilt(root.left)
         let rightInfo = tilt(root.right)
         let value = Math.abs(leftInfo-rightInfo)
         max += value
         let sum = leftInfo + rightInfo + root.val
         console.log(sum);
         return sum
     }
     tilt(root)
     return max
};