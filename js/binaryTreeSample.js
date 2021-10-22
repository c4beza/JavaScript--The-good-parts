function BinaryTree() {
    // 节点的构造函数
    var Node = function(key) {
      this.key = key; // 节点的值
      this.left = null; // 左子树节点
      this.right = null; // 右子树节点
    }

    // 根节点
    var root = null;

    // 插入root的子节点
    var insertNode = function(parentNode, childNode){
      // 左子树构造
      if (childNode.key < parentNode.key) {
        // 为空时赋值，否则继续延伸
        if (parentNode.left === null) {
          parentNode.left = childNode;
        } else {
          insertNode(parentNode.left, childNode);
        }
      } else { // 右子树的构造 childNode.key > parentNode.key
        if (parentNode.right === null) {
          parentNode.right = childNode;
        } else {
          insertNode(parentNode.right, childNode);
        }
      }

    }

    this.getRoot = function() {
      return root;
    }

    // 插入节点的实例方法
    this.insert = function(key) {
      var thisNode = new Node(key);

      // 根节点赋值
      if (root === null) {
        root = thisNode;
      } else {
        // 插入子节点
        insertNode(root, thisNode);
      }
    }
  }

  var nodes = [8, 3, 10, 1, 5, 14, 4, 6, 13];   // 8 3 1 1 1 3 5 4 4 4 5 6 6 6 5 3 8 10 10 14 13 13 13 14 14 10 8
                                                // 前序 8 3 1 5 4 6 10 14 13
                                                // 中序 1 3 4 5 6 8 10 13 14
                                                // 后序 1 4 6 5 3 13 14 10 8
            //         8
            //     3       10
            //   1   5        14
            //      4 6      13
  var binaryTree = new BinaryTree();
  nodes.forEach( key => {
    binaryTree.insert(key);
  });
  console.log(binaryTree.getRoot());

  let root = binaryTree.getRoot();

  var preSerial = function(head){
    let arr = []
    var pres = function(head, list){
        if(head == null){
            list.push(null)
        }else{
            list.push(head.key)
            pres(head.left,list)
            pres(head.right,list)
        }
    }
    pres(head,arr)
    return arr
}
let list = preSerial(root);
console.log(list);
var Node = function(key){
    this.key = key;
    this.left = null;
    this.right = null;
}

var buildByPreArray = function(arr){
    let val = arr.shift()
    if(val == null){
        return null
    }
    head = new Node(val)
    console.log(head)
    head.left = buildByPreArray(arr)
    head.right = buildByPreArray(arr)
    return head;
}
console.log(buildByPreArray(list));