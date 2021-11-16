/**
 * @param {string} word
 * @return {boolean}
 */
 var detectCapitalUse = function(word) {
    let len = word.length
    let temp = word.charAt(0).toUpperCase()
    if(temp == word.charAt(0)){
        temp = word.charAt(1).toUpperCase()
        if(temp == word.charAt(1)){
            for(let i = 2;i<len;i++){
                temp = word.charAt(i).toUpperCase()
                if(temp != word.charAt(i)){
                    return false
                }
            }
        }else{
            for(let i = 2;i<len;i++){
                temp = word.charAt(i).toUpperCase()
                if(temp == word.charAt(i)){
                    return false
                }
            }
        }
    }else{
        for(let i = 1;i<len;i++){
            temp = word.charAt(i).toUpperCase()
            if(temp == word.charAt(i)){
                return false
            }
        }
    }
    return true
};

let word = "USA"
detectCapitalUse(word)