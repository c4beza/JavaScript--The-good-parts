var splitListToParts = function (head, k) {
    let count = 0
    let cur = head
    while (cur) {
        count++
        cur = cur.next
    }
    let res = new Array(k).fill(null)
    cur = head
    if (count < k) {
        let i = 0
        while (cur) {
            let temp = cur.next
            res[i] = cur
            cur.next = null
            cur = temp
            i++
        }
    } else {
        let parti = Math.floor(count / k)
        let mod = count % k
        let j = 0
        while (cur) {
            let x = parti
            if (mod > 0) {
                x++
                mod--
            } else {
                x = parti
            }
            for (let i = 0; i < x; i++) {
                if (i == 0) {
                    res[j] = cur
                } else
                    if (cur.next == null) {
                        return res
                    }
                let temp = null
                if (i == x - 1) {
                    temp = cur.next
                    cur.next = null
                    cur = temp
                } else {
                    cur = cur.next
                }
            }
            j++
        }
    }
    return res
};