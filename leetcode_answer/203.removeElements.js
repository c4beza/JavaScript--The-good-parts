/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
     let fake = new ListNode(-1,head)
     while(fake.next){
         if(fake.next.val == val){
             fake.next = fake.next.next
         }else{
             fake = fake.next
         }
     }
     return fake.next;

};