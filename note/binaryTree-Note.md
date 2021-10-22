# 一个二叉树
```
        1
    2       3
  4   5   6   7
```
* 递归序：每个节点都会到达三次。从头节点传入，1-2-4-4-4-2-5-5-5-2-1-3-6-6-6-3-7-7-7-3-1.
# 二叉树的遍历方式
* 深度优先遍历
  * 递归
    * 前序：任何子树的处理顺序都是，先头节点，再左子树，然后右子树 1 245 367。即当第一次到达某节点时对其进行计算。
        ```
        var preOrder = function(root){
            if(root == null) return;
            console.log(root.value)
            preOrder(root.left)
            preOrder(root.right)
        }
        ```
    * 中序：任何子树的处理顺序都是，先左子树，再头节点，然后右子树 425 1 637。即当第二次到达某节点时对其进行计算。
        ```
        var inOrder = function(root){
            if(root == null) return;
            inOrder(root.left)
            console.log(root.value)
            inOrder(root.right)
        }
        ```
    * 后序：任何子树的处理顺序都是，先左子树，再右子树，然后头节点 452 673 1。即当第三次到达某节点时对其进行计算。
        ```
        var postOrder = function(root){
            if(root == null) return;
            postOrder(root.left)
            postOrder(root.right)            
            console.log(root.value)
        }
        ```
  * 非递归 （迭代法）用压栈来解决
    * 先序：进入循环时，弹出当前最高节点并打印，如果有右孩子压入右孩子，如果有左孩子压入左孩子。即先处理左孩子再处理右孩子。 1 245 367
        ```
        var preOrder2 = function(root){
            var arr  = new Array();
            arr.push(root)
            while(arr.length != 0){
                let cur = arr.pop();
                console.log(cur.val)
                if(cur.right != null){
                    arr.push(cur.right)
                }
                if(cur.left != null){
                    arr.push(cur.left)
                }
            }
        }
        ```
    * 后序：进入循环时，弹出当前最高节点并存入第二个栈，如果有左孩子压入左孩子，如果有右孩子压入右孩子。即先处理右孩子再处理左孩子，最后逆序输出第二个栈。 1 376 254。
        ```
        var postOrder2 = function(root){
            var arr = new Array();
            var res = new Array();
            arr.push(root)
            while(arr.length != 0){
                let cur = arr.pop();
                res.push(cur.val)
                if(cur.left != null){
                    arr.push(cur.left)
                }
                if(cur.right != null){
                    arr.push(cur.right)
                }
            }
            while(res.length != 0){
                console.log(res.pop())
            }
        }
        ```
    * 中序：进入循环后，整条左边界依次入栈，直到抵达左边界底部，弹出栈中顶部节点，并跳到该节点右孩子，继续左边界依次入栈。 425 1 637 （把整棵树用 左头 分解）
        ```
        var inOrder2 = function(root){
                if(root != null){
                    var arr = new Array();
                    while(arr.length != 0 || root != null){
                    if(root != null){
                        arr.push(root)
                        root = root.left
                    }else{
                        root = arr.pop()
                        console.log(root.val)
                        root = root.right
                    }
                }
            }
        }
        ```
    * 后序（单一栈炫技法）：双指针 h与c，三个判断。h节点为上次打印的节点，c赋值为栈中最高节点。
      * 第一次：判断c的左孩子是否为空，并且h不是c的左孩子也不是c的右孩子，通过即c的左孩子入栈，不通过则进入第二次判断。（左树是否被处理）
      * 第二次：判断c的右孩子是否为空，并且上次打印的不是c的右孩子，通过则c的右孩子入栈，不通过则进入第三次判断。（右树是否被处理）
      * 第三次：弹出并打印栈中最高节点，记录该节点。
      * 通过h来记录当前栈中最高节点的孩子是否打印。
        ```
            var postOrder3 = function(root){
                if(root != null){
                    let arr = new Array();
                    let c = null;
                    let h = root;
                    arr.push(h)
                    while(arr.length != 0){
                        c = arr[arr.length-1]
                        if(c.left != null && h !=c.left && h != c.right){
                            arr.push(c.left)
                        }else
                        if(c.right != null && h!= c.right){
                            arr.push(c.right)
                        }else{
                            h = arr.pop()
                            console.log(h.val)
                        }
                    }
                }
            }
        ```
* 广度优先遍历 （一层一层的去遍历）
  * 按层遍历，用队列
    * 依次入队列，当队列不为空时，弹出最前节点，并将该节点的左孩子与右孩子压入队列尾部
  * 如何得知一层的结束与开始，可以用来求出二叉树最宽一层。
    * 使用hashmap
      * 设置2个参数，分别为  curLevel 记录当前正在统计哪一层的宽度；curLevelNodes 当前层curLevel的宽度目前是多少。
      * hashmap的key为节点，value 为该节点所在层数，通过 hashmap 可以查询某一父节点所在层数，给其子节点相应层数。
      * 首先将根节点录入队列和map，然后当队列不为空时，弹出最前节点，并将其子节点压入队列以及hashmap并给予相应层数。
      * 在读取到下一层第一个节点时，比对出宽度最大值，并给 curLevelNodes 赋值为1，curLevel+1。
      * 在出循环后要手动比较最后一层的宽度与之前的最大宽度，因为最后一层没有下一层供其判断。
        ```
            var maxWidthUsingMap = function(root){
                let curLevel = 1;
                let curLevelNodes = 0;
                max = 0;
                let arr = [];
                arr.push(root)
                let m = new Map();
                m.set(root,1)
                while(arr.length != 0){
                    let cur = arr.shift();
                    if(cur.left != null){
                        arr.push(cur.left)
                        m.set(cur.left,m.get(cur)+1);
                    }
                    if(cur.right != null){
                        arr.push(cur.right)
                        m.set(cur.right,m.get(cur)+1)
                    }
                    if(m.get(cur) == curLevel){
                        curLevelNodes++;
                    }else{
                        max = Math.max(curLevelNodes,max);
                        curLevelNodes = 1;
                        curLevel = m.get(cur)
                    }
                }
                max = Math.max(max,curLevelNodes)
                console.log(max);
            }
        ```
    * 不使用hashmap
      * 只用一个队列来存放节点。设置3个参数，curEnd 记录当前层最后节点是什么，nextEnd 记录下一层最右节点是什么，curLevelNodes 当前层curLevel的宽度目前是多少。
      * 首先将根节点录入队列和map，然后当队列不为空时，弹出最前节点，如果有子节点，则分别将左节点压入队列并调整 nextEnd 为该左节点，然后判断如果有右节点则将右节点也压入队列并调整nextEnd 为该右节点。（下一层开始时开始判断）
      * curLevelNodes+1后，判断当前节点是否为当前层最右节点，如果通过则说明当前层已遍历完毕，应统计max与curLevelNodes中的最大值并赋值给max，并将当前层节点数重置，调整当前最右节点为下一层最右节点，不是则继续循环。（老层节数后开始判断）
      ```
      var maxWidthNoMap = function(root){
          let curEnd = root
          let nextEnd = null
          let curLevelNodes = 0;
          let arr = []
          let max = 0;
          arr.push(root)
          while(arr.length != 0){
            let cur = arr.shift()
            if(cur.left != null){
                arr.push(cur.left)
                nextEnd = cur.left
            }
            if(cur.right != null){
                arr.push(cur.right)
                nextEnd = cur.right
            }
            curLevelNodes++;
            if(cur == curEnd){
                max = Math.max(max,curLevelNodes)
                curLevelNodes = 0
                curEnd = nextEnd
            }  
          }
          console.log(max)
      }
      ```
# 二叉树的序列化和反序列化
  * 可以用先序或者中序或者后序或者按层遍历，来实现二叉树的序列化。
  * 先序-序列化
    ```
    var preSerial = function(head){
        let arr = []
        var pres = function(head, list){
            if(head == null){
                list.push(null)
            }else{
                list.push(head.val)
                pres(head.left,list)
                pres(head.right,list)
            }
        }
        pres(head,arr)
        console.log(arr)
    }
    ```
  * 用了什么方式序列化，就用什么方式反序列化
  * 先序-反序列化
    ```
        var Node = function(key){
            this.key = key;
            this.left = null;
            this.right = null;
        }
        var bulidByPreArray = function(arr){
            let val = arr.shift()
            if(val == null){
                return null
            }else{
                head = new Node(val)
                head.left = buildByPreArray(arr)
                head.right = buildByPreArray(arr)
            }
        }
    ```
# 递归三步曲
1. 递归函数的参数和返回值
2. 确定终止条件
3. 单层递归的逻辑 


