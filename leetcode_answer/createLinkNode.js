
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


let arr = [-8,-7,7,5,3,-7,-8,-1,9,-2,4,6,-4,-1,3,0,4,-8,-8,-8,8,6,-4,-4];
let head = createListNode(arr)