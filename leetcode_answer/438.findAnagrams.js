/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function (s, p) {
    if (s.length < p.length) {
        return [];
    }
    let len = p.length
    let m = new Map()
    for (let i = 0; i < len; i++) {
        if (!m.has(p[i])) {
            m.set(p[i], 1)
        } else {
            m.set(p[i], m.get(p[i]) + 1)
        }
    }
    let j = 0
    let res = new Array()
    while(j < s.length){
        if(m.has(s[j]) && j + len <=s.length){
            let secondMap = new Map()
            let flag = true
            for(let k = j; k < len + j; k++){
                if(m.has(s[k])){
                    if (!secondMap.has(s[k])) {
                        secondMap.set(s[k], 1)
                    } else {
                        secondMap.set(s[k], secondMap.get(s[k]) + 1)
                    }
                }else{
                    j = k
                    flag = false
                    break;
                }
            }

            if(flag == true){
                secondMap.forEach((v,k) =>{
                    if(m.get(k) != v){
                        flag = false
                    }
                })
            }


            if(flag == true){
                res.push(j)
            }
            j++
        }else{
            j++
        }
    }
    return res
};
let s = "abab"
let p ="ab"

findAnagrams(s,p)