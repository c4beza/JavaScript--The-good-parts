/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = function(head, k) {
    if(!head) return null;
    let count = 0
    let end = head
    while(head){
        head = head.next
        count++
    }
    k = k>count?k%count:k
    for(let i = 0; i<k;i++){
        let cur = end
        let start = cur
        while(cur && cur.next){
            if(cur.next.next == null){
                end = cur.next
                cur.next = null
                end.next = start 
            }else{
                cur = cur.next
            }
        }
    }
    return end
}; var rotateRight = function(head, k) {
    if(!head) return null;
    let count = 0
    let end = head
    while(head){
        head = head.next
        count++
    }
    k = k>count?k%count:k
    for(let i = 0; i<k;i++){
        let cur = end
        let start = cur
        while(cur && cur.next){
            if(cur.next.next == null){
                end = cur.next
                cur.next = null
                end.next = start 
            }else{
                cur = cur.next
            }
        }
    }
    return end
};
