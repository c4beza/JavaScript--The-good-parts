/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let cur = head;
    let size = 0;
    while(cur.next != null){
        size++;
        cur = cur.next;
    }
    if(size == 0) return null
    if(size == n-1){
        head = head.next
        return head
    }
    cur = head;
    for( let i = 0; i < size; i++){
        if( i == size - n){
            let prev = cur;
            cur = prev.next;
            prev.next = cur.next
            return head;
        }else{
        cur = cur.next;
        }
    }

};
