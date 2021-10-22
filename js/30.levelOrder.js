    var levelOrder = function(root) {
        if(root == null) return [];
        let arr = new Array();
        let m = new Map();
        let sub = new Array();
        let res = new Array();
        arr.push(root);
        m.set(root,1);
        let curLevel = 1;
        while(arr.length != 0){
            let cur = arr.shift();
            if(m.get(cur) != curLevel){
                curLevel = m.get(cur);
                res.push(sub);
                sub = []
            }
            if(cur.left != null){
                arr.push(cur.left)
                m.set(cur.left,curLevel+1)
            }
            if(cur.right != null){
                arr.push(cur.right)
                m.set(cur.right,curLevel+1)
            }
            sub.push(cur.val)
        }
        res.push(sub)
        return res;
    };