/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    let s = new Set();
    while(head!=null){
        if(s.has(head)) return false
        s.add(head)
        head = head.next
    }
    return true
};

