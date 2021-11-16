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
 var sortList = function(head) {
    var mergeSort = function(start){
       if (start.next == null) {
           return start;
       }
        let first = start
        let second = first
        let pre = null
        while(second && second.next){
            pre = first
            first = first.next
            second = second.next.next
        }
        pre.next = null
        let listA = mergeSort(start)
        let listB = mergeSort(first)
        return merge(listA,listB)
    }

    var merge = function(listA,listB){
        let dummyHead = new ListNode()
        let cur = dummyHead;
        while(listA && listB){
            if(listA.val <= listB.val){
                let temp = listA.next
                listA.next = null
                cur.next = listA
                listA = temp
                cur = cur.next
            }else{
                let temp = listB.next
                listB.next = null
                cur.next = listB
                listB = temp
                cur = cur.next
            }
        }
        if (listA != null) {
            cur.next = listA;
        }
        if (listB != null) {
            cur.next = listB;
        }
        return dummyHead.next
    }
    return head? mergeSort(head):null 

};