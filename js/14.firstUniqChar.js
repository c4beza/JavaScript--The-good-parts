/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
     let m = new Map();
     let a = new Array()
     for(let i = 0; i<s.length;i++){
         if(m.has(s.charAt(i))){
             m.set(s.charAt(i), m.get(s.charAt(i))+1);
         }else{
             m.set(s.charAt(i),1);
         }
         a.push(s.charAt(i));
     }
     for( let i = 0; i<a.length;i++){
         if(m.get(a[i]) == 1){
            //  console.log(i);
             return i;
         }
     }
     return -1;

};

s = "leetcode"
firstUniqChar(s);