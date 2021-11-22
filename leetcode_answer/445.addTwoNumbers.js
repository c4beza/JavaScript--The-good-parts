/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
    let arr1 = []
    let arr2 = []
    let i = 0
    while (l1) {
        arr1[i] = l1.val
        l1 = l1.next
        i++
    }
    let j = 0
    while (l2) {
        arr2[j] = l2.val
        l2 = l2.next
        j++
    }
    let size = 0
    i > j ? size = i : size = j
    let arr3 = new Array(size).fill(0)
    i = arr1.length - 1
    j = arr2.length - 1
    let z = arr3.length - 1
    let flag = 0
    while (i >= 0 && j >= 0) {
        let sum = arr1[i] + arr2[j] + flag
        if (sum >= 10) {
            arr3[z] = sum - 10
            flag = 1
        } else {
            arr3[z] = sum
            flag = 0
        }
        i--
        j--
        z--
    }
    while (i >= 0) {
        let sum = arr1[i] + flag
        if (sum >= 10) {
            arr3[z] = sum - 10
            flag = 1
        } else {
            arr3[z] = sum
            flag = 0
        }
        i--
        z--
    }
    while (j >= 0) {
        let sum = arr2[j] + flag
        if (sum >= 10) {
            arr3[z] = sum - 10
            flag = 1
        } else {
            arr3[z] = sum
            flag = 0
        }
        j--
        z--
    }
    if (flag > 0) {
        arr3.unshift(1)
    }
    let pre = null
    for (let i = arr3.length - 1; i >= 0; i--) {
        let tail = new ListNode()
        tail.val = arr3[i]
        tail.next = pre
        pre = tail
    }
    return pre
};
// var addTwoNumbers = function (l1, l2) {
//     let string1 = ''
//     let string2 = ''
//     while (l1) {
//         string1 = string1 + l1.val
//         l1 = l1.next
//     }
//     while (l2) {
//         string2 = string2 + l2.val
//         l2 = l2.next
//     }
//     let num1 = string1 - 0
//     let num2 = string2 - 0
//     let res = num1 + num2
//     res = res + ''
//     let pre = null
//     for (let i = res.length - 1; i >= 0; i--) {
//         let tail = new ListNode()
//         tail.val = res.charAt(i) + 0
//         tail.next = pre
//         pre = tail
//     }
//     return tail
// };