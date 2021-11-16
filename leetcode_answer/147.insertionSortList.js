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
 var insertionSortList = function(head) {
     let dummy = new ListNode(-Infinity)
     dummy.next = head
     var insertionAndCompare = function(start,max,cur){
        if(!cur) return
        let dummy = start
        if(cur.val > max.val) return insertionAndCompare(dummy,cur,cur.next)
        let node = dummy;
        while(node.next && cur){
            if(node.next.val > cur.val){
                let temp = node.next
                let next = cur.next
                node.next = cur       
                cur.next = temp
                max.next = next
                if(cur.val > max.val){
                    max = cur
                }
                return insertionAndCompare(dummy,max,next)
            }else{
                node = node.next
            }

        }
     }
     insertionAndCompare(dummy,dummy,dummy.next)
     return dummy.next
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var createListNode = function(arr){
    let prev = new ListNode(arr[0],null)
    let head = prev
    for(let i = 1; i< arr.length;i++){
        let cur = new ListNode(arr[i],null)
        prev.next  = cur
        prev = cur
    }
    return head
}
let arr = [4,2,1,3];
let head = createListNode(arr)
insertionSortList(head)


