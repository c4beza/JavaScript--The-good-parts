/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
 var getHint = function(secret, guess) {
    let s = secret.split('')
    let g = guess.split('')
    let m = new Map()
    let a = 0;
    let b = 0;
    for(let i = 0;i < secret.length;i++){
        m.has(s[i])? m.set(s[i],m.get(s[i])+1) : m.set(s[i],1)
        if(s[i] == g[i]){
            a++;
            m.set(s[i],m.get(s[i])-1)
            g[i] = -1
        }
    }
    for(let i = 0; i < secret.length;i++){
            if(m.has(g[i])&&m.get(g[i])>0){
                m.set(g[i],m.get(g[i])-1)
                b++
            }
    }
    return a+"A"+b+"B"
};

let secret = "1122"
let guess ="1222"


getHint(secret,guess)