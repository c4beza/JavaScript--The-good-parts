
var fc = function(num){
    var rule = [[3000,0.03,0],[9000,0.1,210],[13000,0.2,1410]]
    let sum = 0
    //0-3000
    if(num-rule[0][0]>0){
        sum = sum + rule[0][0]*rule[0][1] 
    }else{
        sum = sum+ num*rule[0][1]
        return sum - rule[0][2]
    }
    num = num - rule[0][0]
    //3000-12000
    if(num-rule[1][0]>0){
        sum = sum + rule[1][0]*rule[1][1] 
    }else{
        sum = sum + num*rule[1][1]
        return sum - rule[1][2]
    }
    num = num - rule[1][0]
    //12000-25000
    if(num-rule[2][0]>0){
        sum = sum + rule[2][0]*rule[2][1] 
    }else{
        sum = sum + num*rule[2][1]
        return sum +-rule[2][2]
    }
    num = num - rule[2][0]

}

let num  = 13000
fc(num)