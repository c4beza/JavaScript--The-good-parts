/**
 * @param {number[]} score
 * @return {string[]}
 */
 var findRelativeRanks = function(score) {
    let rank = score.slice()
    rank.sort((a,b)=>(b-a))
    let m = new Map()
    rank.forEach((v,i)=>{
        if(i == 0){
            m.set(v,'Gold Medal')
        }else
        if(i == 1){
            m.set(v,'Silver Medal')
        }else
        if(i == 2){
            m.set(v,'Bronze Medal')
        }else{
            m.set(v,i + 1 +'')
        }
    })
    score.forEach((v,i)=>{
        score[i] = m.get(v)
    })
    return score
};