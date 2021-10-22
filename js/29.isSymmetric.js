var isSymmetric = function(root) {
    let arr = [[root.left,root.right]]
    while(arr.length != 0){
        let cur = arr.shift();
        if(cur[0] == null && cur[1] == null) continue;
        if(cur[0] == null || cur[1] == null || cur[0].val != cur[1].val){
            return false;
        }
        arr.push([cur[0].left,cur[1].right])    
        arr.push([cur[0].right,cur[1].left])
    }
    return true
};

var isSymmetric = function(root){
    if(root == null){
        return true
    }
    var isSymmetricHelper = function(left,right){
        if(left == null && right == null){
            return true
        }
        if(left == null || right == null || left.val != right.val){
            return false
        }
        return isSymmetricHelper(left.left,right.right) && isSymmetricHelper(left.right,right.left)
    }
    return isSymmetricHelper(root.left,root.right)
}