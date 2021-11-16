/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
 var Solution = function(head) {
     this.head = head

};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    let cur = this.head
    let res = cur.val
    let count = 0
    while(cur){
        count++
        let randomNum = Math.floor(Math.random()*count + 1)
        if(randomNum == count){
            res = cur.val
        }
        cur = cur.next
    }
    return res
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */