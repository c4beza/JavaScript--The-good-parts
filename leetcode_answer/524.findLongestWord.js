/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
// var findLongestWord = function (s, dictionary) {
//     dictionary.sort();
//     dictionary.reverse();
//     let res = '';
//     for (let t of dictionary) {
//         let i = 0;
//         let j = 0
//         while (j < t.length && i < s.length) {
//             if (s[i] == t[j]) {
//                 j++;
//             }
//             i++;
//         }
//         if (j == t.length && t.length >= res.length) res = t
//     }
//     return res
// };

var findLongestWord = function(s, dictionary) {
    dictionary.sort();
    let size = dictionary.length;
    let res = '';
    while(size--){
        let flag = 1;
        let i = 0;
        let j = 0
        while(j < dictionary[size].length){
            while(i < s.length){
                if(s[i] != dictionary[size][j]){
                    i++;
                }else
                if(s[i] == dictionary[size][j]){
                            i++;
                            j++;
                    }
            }
            if(i == s.length && j < dictionary[size].length ){
                j++;
                flag = -1
            }
        }
        if(flag == 1 && dictionary[size].length >= res.length) res = dictionary[size]
    }
    return res
};
s = "abpcplea", dictionary = ["a", "b", "c"]
findLongestWord(s, dictionary)