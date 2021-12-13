/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
 var shortestCompletingWord = function(licensePlate, words) {
    let m = new Map()
    for(let i = 0; i< licensePlate.length; i++){
        if(licensePlate[i].match(/[a-zA-Z]/)){
            let letter = licensePlate[i].toLowerCase()
            let num = letter.charCodeAt(0) - "a".charCodeAt(0)
            if(m.has(num)){
                m.set(num, m.get(num)+1)
            }else{
                m.set(num,1)
            }
        }
    }
    let res = ''
    for(let i = 0; i < words.length;i++){
        let compareWord = words[i]
        let compareArr = new Array(26).fill(0)
        for(let j = 0; j < compareWord.length; j++){
            let letter = compareWord[j].toLowerCase()
            let num = letter.charCodeAt(0) - "a".charCodeAt(0)
            compareArr[num]++
        }
        let flag = true
        m.forEach(
            (v,k)=>{
                if(compareArr[k] < v){
                    flag = false
                }
            }
        )
        if((flag && res.length == 0) || (flag && compareWord.length < res.length)){
            res = compareWord
        }
    }
    return res
};

let licensePlate = "GrC8950"
let words = ["according"]
shortestCompletingWord(licensePlate,words)