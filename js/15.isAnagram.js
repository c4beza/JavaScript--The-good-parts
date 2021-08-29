/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
     let m = new Map();
     let n = 0;
     for(let i = 0; i<s.length; i++){
        if(m.has(s[i])){
            m.set(s[i],m.get(s[i])+1);
        }else{
            m.set(s[i], 1);
        }
     }
     for(let i = 0; i<t.length;i++){
         if(!m.has(t[i])){
             return false;
         }else{
             m.set(t[i],m.get(t[i])-1)
         }
     }
    m.forEach(value => value != 0 ? n = -1: n )
    return n == -1? false: true;
}

let s = "anagram", t = "naaram";
isAnagram(s,t)