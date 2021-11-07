/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    let a = headA
    let b = headB;
    let m = new Map()
    while(a){
        m.set(a,a.val)
        a = a.next
    }
    while(b){
        if(m.has(b)){
            return b
        }else{
            b = b.next
        }
    }
    return null
};