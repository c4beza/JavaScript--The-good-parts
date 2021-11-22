/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    let arr = s.split()
    let m = new Map()
    for(let i = 0; i <arr.length;i++){
        if(!m.has(arr[i])){
            m.set(arr[i],1)
        }else{
            m.set(arr[i], m.get(arr[i]+1))
        }
    }

    for(let i = 0; i<arr.length;i++){
        if(m.get(arr[i]) == 1){
            return i
        }
    }
    return -1
};