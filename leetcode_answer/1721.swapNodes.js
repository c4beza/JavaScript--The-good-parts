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
//  var swapNodes = function(head, k) {
//      let m = new Map()
//      let cur = head
//      let count = 1
//      while(cur){
//         m.set(count++,cur)
//         cur = cur.next
//      }
//      let size = count -1
//      cur = head
//      if(k == 1 || k == size){
//          if(size == 1){
//              return head
//          }
//          if(size == 2){
//              cur.next = null
//              m.get(2).next = cur
//              return m.get(2)
//          }
//         let temp = cur.next
//         let pre = m.get(size-1)
//         pre.next = null
//         cur.next = null
//         m.get(size).next = temp
//         pre.next = cur
//         return m.get(size)
//      }
//      let firstNode = m.get(k)
//      let secondNode = m.get(size - k + 1)
//      if(firstNode == secondNode) return head
//      if(firstNode.next == secondNode ){
//         let firstNodePre = m.get(k-1)
//         let secondNodeNext = secondNode.next
//         firstNode.next = null
//         secondNode.next = null
//         firstNodePre.next = secondNode
//         secondNode.next = firstNode
//         firstNode.next = secondNodeNext
//         return head
//      }
//      if(secondNode.next == firstNode){
//         let temp = firstNode
//         firstNode = secondNode
//         secondNode =temp
//         let firstNodePre = m.get(size - k)
//         let secondNodeNext = secondNode.next
//         firstNode.next = null
//         secondNode.next = null
//         firstNodePre.next = secondNode
//         secondNode.next = firstNode
//         firstNode.next = secondNodeNext
//         return head

//      }
//      let firstNodePre = m.get(k-1)
//      let firstNodeNext = firstNode.next
//      let secondNodePre = m.get(size - k)
//      let secondNodeNext = secondNode.next
//      firstNode.next = null
//      secondNode.next = null
//      firstNodePre.next = secondNode
//      secondNode.next = firstNodeNext
//      secondNodePre.next = firstNode
//      firstNode.next = secondNodeNext
//      return head
// };

var swapNodes = function(head){
    
}