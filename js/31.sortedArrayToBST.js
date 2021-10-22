var sortedArrayToBST = function(nums) { 
    if(nums.length == 0) return null;
    let t  = Math.floor(nums.length/2)
    let node = new TreeNode(nums[t], null ,null)
    if(t > 0){
        node.left = sortedArrayToBST(nums.slice(0,t))
    }
    if(t + 1< nums.length){
        node.right = sortedArrayToBST(nums.slice(t+1,nums.length))
    }
    return node;
};