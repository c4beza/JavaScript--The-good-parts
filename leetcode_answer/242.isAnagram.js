/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false
    let arr = s.split('')
    let m = new Map()
    for(let i = 0; i< arr.length;i++){  
        if(!m.has(arr[i])){
            m.set(arr[i],1)
        }else{
            m.set(arr[i],m.get(arr[i])+1)
        }
    }
    let arr2 = t.split('')
    for(let i = 0; i<arr2.length;i++){
        if(!m.has(arr[i])){
            return false
        }else{
            m.set(arr[i],m.get(arr[i])-1)
        }
    }
    let res = true
    m.forEach(v=>{
        if(v!=0){
            res = false
        }
    })
    return res
};