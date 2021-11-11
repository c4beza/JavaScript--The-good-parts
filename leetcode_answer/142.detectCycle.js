/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let m = new Map()
    let i = 0;
    while (head) {
        if (m.has(head)) {
            return m.get(head)
        } else {
            m.set(head, i)
            head = head.next
            i++
        }
    }
    return -1
};


var detectCycle = function (head) {
    if (!head) return null
    let slow = head
    let fast = head
    while (fast) {
        if (fast.next == null) {
            return null
        }
        slow = slow.next
        fast = fast.next.next
        if (fast == slow) {
            let fast = head
            while(fast != slow){
                fast = fast.next
                slow = slow.next
            }
            return fast
        }
    }
    return null
};