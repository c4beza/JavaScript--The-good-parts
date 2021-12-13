/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 var buddyStrings = function(s, goal) {
    let arr = s.split('')
    let m = new Map()
    for(let i = 0;i<arr.length;i++){
        if(m.has(arr[i])){
            m.set(arr[i], m.get(arr[i])+1)
        }else{
            m.set(arr[i],1)
        }
    }
    let arr2 = goal.split('')
    let count = 0
    if(s == goal){
        let flag = false
        m.forEach((v,k) =>{
            v>1? flag = true: null
        })
        return flag
    }else{
        for(let i = 0;i<arr2.length;i++){
            if(m.has(arr2[i]) && m.get(arr2[i]) > 0){
                if(arr[i] != arr2[i]){
                    count++
                }
                m.set(arr2[i],m.get(arr2[i]) - 1)
            }else{
                return false
            }
        }
    }
    return count == 2
};

let s = "abcacaba"
let goal = "abbacaca"
buddyStrings(s,goal)