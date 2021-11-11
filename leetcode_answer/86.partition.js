/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function(head, x) {
    if(!head) return null
   let stop = new ListNode();
   let secondPartition = new ListNode();
   let bb =secondPartition
   stop.next = head
   let res = stop
   secondPartition.next = head
   let cur = stop
   while(cur && cur.next){
       if(cur.next.val < x){
           stop.next = cur.next
           cur = cur.next
           stop = stop.next
       }else{
           secondPartition.next = cur.next
           cur = cur.next
           secondPartition = secondPartition.next
       }
   }
   secondPartition.next = null
   stop.next = bb.next
   console.log(res.next)
   return res.next
};
