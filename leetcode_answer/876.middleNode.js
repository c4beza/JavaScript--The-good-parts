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
 var middleNode = function(head) {
    if(!head) return null
   let arr  = new Array()
   let i = 0
   while(head){
       arr[i++] = head
       head = head.next
   }
   if(arr.length%2 == 1){
       return arr[(arr.length+1)/2 -1]
   }else{
       return arr[arr.length/2]
   }
};