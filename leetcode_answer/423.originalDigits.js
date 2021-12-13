/**
 * @param {string} s
 * @return {string}
 */
 var originalDigits = function(s) {
     let arr = s.split('')
     let m = new Map()
     for(let i = 0;i<arr.length;i++){
         m.has(arr[i])? m.set(arr[i],m.get(arr[i])+1): m.set(arr[i],1)
     }
     let n0 = m.has('z')?m.get('z'):0
     let n8 = m.has('g')?m.get('g'):0
     let n6 = m.has('x')?m.get('x'):0
     let n4 = m.has('u')?m.get('u'):0
     let n2 = m.has('w')?m.get('w'):0
     let n1 = m.has('o')?m.get('o') - n0 - n2 -n4 : 0
     let n3 = m.has('h')?m.get('h') - n8:0
     let n5 = m.has('f')?m.get('f') - n4:0
     let n7 = m.has('s')?m.get('s') - n6:0
     let n9 = m.has('i')?m.get('i') - n5 - n6 - n8:0
     console.log(n0,n1,n2,n3,n4,n5,n6,n7,n8,n9);
     let str = ''
     str = n0? str + '0'.repeat(n0):str
     str = n1? str + '1'.repeat(n1):str
     str = n2? str + '2'.repeat(n2):str
     str = n3? str + '3'.repeat(n3):str
     str = n4? str + '4'.repeat(n4):str
     str = n5? str + '5'.repeat(n5):str
     str = n6? str + '6'.repeat(n6):str
     str = n7? str + '7'.repeat(n7):str
     str = n8? str + '8'.repeat(n8):str
     str = n9? str + '9'.repeat(n9):str
     return str
};

//one two three four five six seven eight nine zero
//     w          u        x          g          z