/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function (head) {
    if (!head) return null
    let first = head;
    let m = new Map()
    let i = 1
    while (first) {
        let temp = first.next
        m.set(i,first)
        first.next = null
        first = temp
        i++
    }
    let n = Math.floor((i - 1)/2)
    let j = i - 1
    i = 1
    while(n>0){
        m.get(i).next = m.get(j)
        m.get(j).next = i+1==j? null:m.get(i+1)
        j--
        i++
        n--    
    }
};




