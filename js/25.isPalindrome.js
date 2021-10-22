/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let m = new Map();
    let count = 1;
    if (head == null) return false;
    m.set(count, head);
    while(head.next != null){
       m.set(++count, head.next)
       head = head.next;
    }
    for(let i = 1; i < (count+1)/2; i++){
        if(m.get(i).val != m.get(count+1 - i).val)
        return false;
    }
    return true;
};


var isPalindrome = function(head) {
    let fast  = head;
    let slow  = head
    let pre = head;
    let prepre = null
    while(fast != null && fast.next != null){
        fast = fast.next.next;
        slow = slow.next
        pre.next = prepre;
        prepre = pre
        pre = slow
    }
    if(fast != null){
        slow = slow.next
    }
    while(slow != null){
        if(slow.val != prepre.val ) return false
        slow  = slow.next
        prepre = prepre.next
    }
    return true
};