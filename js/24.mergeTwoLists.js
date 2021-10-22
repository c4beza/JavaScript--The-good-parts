/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode (val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function (l1, l2) {
    if (l1 == null) return l2;
    if (l2 == null) return l1;
    let res = new ListNode(0, null);
    let cur = res
    while (l1 != null || l2 != null) {
        if (l1 != null && l2 != null) {
            if (l1.val >= l2.val) {
                cur.next = l2;
                l2 = l2.next
            } else {
                cur.next = l1;
                l1 = l1.next
            }
            cur = cur.next
        } else {
            if (l1 == null) {
                cur.next = l2;
                l2 = l2.next;
                cur = cur.next
            } else {
                cur.next = l1;
                l1 = l1.next;
                cur = cur.next
            }
        }
    }
    return res.next
};


// var mergeTwoLists = function (l1, l2) {
//     if (l1 == null) return l2;
//     if (l2 == null) return l1;
//     let res = new ListNode(0, null);
//     let cur = res

//     while (l1 != null && l2 != null) {
//         if (l1.val >= l2.val) {
//             cur.next = l2;
//             l2 = l2.next
//         } else {
//             cur.next = l1;
//             l1 = l1.next
//         }
//         cur = cur.next
//     }

//     cur.next = l1 == null ? l2 : l1;
//     return res.next
// };

let l12 = new ListNode(2, null)
let l1 = new ListNode(1, l12)

let l2 = new ListNode(0, null);
mergeTwoLists(l1, l2)