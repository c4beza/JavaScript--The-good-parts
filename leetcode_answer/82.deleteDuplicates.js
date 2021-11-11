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
    if(!head) return null
    let dummy = new ListNode()
    dummy.next = head
    let m = new Map()
    while(head){
        if(m.has(head.val)){
            m.set(head.val,m.get(head.val)+1)
        }else{
            m.set(head.val,1)
        }
        head = head.next
    }
    let res = dummy
    while(res && res.next){
        if(m.get(res.next.val) > 1){
            res.next = res.next.next
        }else{
            res = res.next
        }
    }
    return dummy.next
};
