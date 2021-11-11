/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    let dummy = new ListNode(501)
    dummy.next = head;
    let res = dummy
    let firstPart = new ListNode(501)
    let middlePart = new ListNode(501)
    let SecondPart = new ListNode(501)
    let count = 0 
    while(dummy && dummy.next){
        if(count == left - 1){
           firstPart = dummy
           dummy = dummy.next
           middlePart = dummy
           firstPart.next = null
           count++   
        }else
        if(count == right){
           SecondPart = dummy.next
           dummy.next = null
        }else{
            dummy = dummy.next
            count++
        }
    }    
    
    let temp = new ListNode()
    temp.next = middlePart
    let cur = temp
    middlePart = temp
    let m = new Map()
    let i = 1
    while(cur.next){
        m.set(i,cur.next)
        cur = cur.next
        i++
    }
    while(i>1){
        m.get(--i).next = null
        temp.next = m.get(i)
        temp = temp.next
    }
        firstPart.next = middlePart.next;
    if(SecondPart.val != 501){
        temp.next = SecondPart
    }

    return res.next
};
