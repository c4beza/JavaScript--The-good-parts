/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var flatten = function(head) {
    if(!head) return null
    let arr = new Array()
    let cur = head
    while(cur){
        if(cur.child && cur.next){
           let temp = cur.next
           cur.next = null
           cur.next = cur.child
           cur.child.prev = cur
           cur.child = null
           cur = cur.next
           temp.prev = null
           arr.unshift(temp)
        }else
        if(cur.child){
            cur.next = cur.child
            cur.child.prev = cur
           cur.child = null
            cur = cur.next
        }else
        if(cur.next){
            cur = cur.next
        }else{
            if(arr.length>0){
                let temp = arr.shift()
               cur.next = temp
               temp.prev = cur
               cur = cur.next
            }else{
                cur.next = null
                return head
            }
        }
    }
};