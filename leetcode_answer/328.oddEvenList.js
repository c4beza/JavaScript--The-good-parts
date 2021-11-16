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
var oddEvenList = function (head) {
    if(head.next.next) return head
    let oddEnd = head
    let evenFirst = head.next
    let evenEnd = evenFirst
    let cur = head.next.next
    evenFirst.next = null
    let n = 3
    while (cur) {
        if (n % 2 == 1) {
            let temp = cur.next
            cur.next = null
            oddEnd.next = cur
            oddEnd = cur
            oddEnd.next = evenFirst
            cur = temp
        } else {
            let temp = cur.next
            cur.next = null
            evenEnd.next = cur
            evenEnd = cur
            cur = temp
        }
    }
    return head
};
