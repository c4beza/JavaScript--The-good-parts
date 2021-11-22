/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
     let arr = ransomNote.split('')
     let m = new Map()
     arr.forEach(v=>{
         if(!m.has(v)){
             m.set(v,1)
         }else{
             m.set(v,m.get(v)+1)
         }
     })
     let arr2 = magazine.split('')
     arr2.forEach(v=>{
         if(m.has(v) && m.get(v) > 0){
             m.set(v,m.get(v)-1)
         }
     })

     m.forEach(v => {
         if(v>0) return false
     })
     return true
};