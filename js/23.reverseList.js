/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if(!head) return null
    let p = head;
    const result = new ListNode()
    let cur = result
    let m = new Map();
    let index = 0;
    while(p){
        m.set(index,p)
        p = p.next;
        index++
    }
    index = index -1;
    m.get(0).next = null
    for(; index >= 0; index--){
        let tail = m.get(index)
        cur.next = tail;
        cur = cur.next
    }

    return result.next
};