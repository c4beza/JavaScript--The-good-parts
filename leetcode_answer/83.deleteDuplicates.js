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
//  var deleteDuplicates = function(head) {
//     let s = new Set();
//     let temp = new ListNode(-1, head)
//     while( temp.next){
//         if(s.has(temp.next.val)){
//             temp.next = temp.next.next
//         }else{
//             s.add(temp.next.val)
//             temp = temp.next
//         }
//     }
//     return head
// };

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
 var deleteDuplicates = function(head) {
    if (!head) {
        return head;
    }
     let cur = head;
     while(cur.next){
         if(cur.val == cur.next.val){
            cur.next = cur.next.next
         }else{
             cur = cur.next
         }
     }
     return head
};