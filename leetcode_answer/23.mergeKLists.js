/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let k = lists.length;
    let pq = new Array();
    let dummy = new ListNode()
    let pre = dummy

    var addNode = function (pq, ln) {
        if (pq.length == 0) {
            pq.push(ln)
        } else {
            if (pq[pq.length - 1].val <= ln.val) {
                pq.push(ln)
            } else {
                for (let i = 0; i < pq.length; i++) {
                    if (pq[i].val > ln.val) {
                        pq.splice(i, 0, ln)
                        return pq
                    }
                }
            }
        }
        return pq
    }

    while (lists.length != 0) {
        lists.forEach((v, i) => {
            if (v == null) {
                lists.splice(i, 1)
            }
        })

        let min = +Infinity
        let selectList = null
        for (let i = 0; i < lists.length; i++) {
            if (lists[i] != null && lists[i].val < min) {
                min = lists[i].val
                selectList = i
            }
        }
        if (lists[selectList]) {
            let head = lists[selectList]
            let temp = head.next
            head.next = null
            pq = addNode(pq, head)
            lists[selectList] = temp
        }

        if (pq.length > k) {
            let popNode = pq.shift()
            pre.next = popNode
            pre = pre.next
        }
    }

    if (lists.length == 0) {
        while (pq.length != 0) {
            let popNode = pq.shift()
            pre.next = popNode
            pre = pre.next
        }
        return dummy.next
    }
};



function ListNode (val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var createListNode = function (arr) {
    let prev = new ListNode(arr[0], null)
    let head = prev
    for (let i = 1; i < arr.length; i++) {
        let cur = new ListNode(arr[i], null)
        prev.next = cur
        prev = cur
    }
    return head
}


let arr1 = [];
let arr2 = []

let head1 = createListNode(arr1)
let head2 = createListNode(arr2)
let arr4 = [head1, head2]
console.log(arr4);
mergeKLists(arr4)

let arr = new minPriority