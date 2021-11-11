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
 var swapPairs = function(head) {
     if(!head) return null
     let dummy = new ListNode()
     dummy.next = head
     let cur = dummy
     while(cur.next && cur.next.next){
         let temp = cur.next //1
         let temp2 = cur.next.next.next
         cur.next = cur.next.next //l2
         cur.next.next = temp
         temp.next = temp2
         cur = temp
     }
     return dummy.next
};