/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    if(!head) return null
    let temp = head
    let m = new Map()
    while(temp){
        let node = new Node(temp.val,null,null)
        m.set(temp,node)
        temp = temp.next
    }
    temp = head
    while(temp){
        m.get(temp).next = temp.next? m.get(temp.next):null
        m.get(temp).random = temp.random? m.get(temp.random):null
        temp = temp.next
    }
    return m.get(head)
};