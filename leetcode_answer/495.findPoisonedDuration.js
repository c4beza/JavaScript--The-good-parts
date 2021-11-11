/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
 var findPoisonedDuration = function(timeSeries, duration) {
    let time = 0
    let cur = timeSeries[0]
    for(let i =0;i<timeSeries.length;i++){
        if(cur < timeSeries[i]){
            time += duration
            cur = timeSeries[i] + duration
        }else{
            time += timeSeries[i] + duration - cur
            cur = timeSeries[i] + duration
        }
    }
    return time
 }

let timeSeries = [0,6 ,10,20]
let duration = 5
findPoisonedDuration(timeSeries,duration)

