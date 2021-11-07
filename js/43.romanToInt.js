/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let arr = s.split('')
    let arr2 = new Array()
    for(let i = 0, j=0;i<arr.length;i++){
        if(arr[i] == 'I' && arr[i+1] == 'V'){
            arr2[j++] = 'IV'; i++
        }else
        if(arr[i] == 'I' && arr[i+1] == 'X'){
            arr2[j++] = 'IX'; i++
        }else
        if(arr[i] == 'X' && arr[i+1] == 'L'){
            arr2[j++] = 'XL'; i++
        }else
        if(arr[i] == 'X' && arr[i+1] == 'C'){
            arr2[j++] = 'XC'; i++
        }else
        if(arr[i] == 'C' && arr[i+1] == 'D'){
            arr2[j++] = 'CD'; i++
        }else
        if(arr[i] == 'C' && arr[i+1] == 'M'){
            arr2[j++] = 'CM'; i++
        }else{
            arr2[j++] = arr[i]
        }
        
    }
    let m = new Map()
    let sum = 0
    for(let i = 0; i<arr2.length;i++){
        switch(arr2[i]){
            case 'I': m.set(i,1);break
            case 'V': m.set(i,5);break
            case 'X': m.set(i,10);break
            case 'L': m.set(i,50);break
            case 'C': m.set(i,100);break
            case 'D': m.set(i,500);break
            case 'M': m.set(i,1000);break
            case 'IV': m.set(i,4);break
            case 'IX': m.set(i,9);break
            case 'XL': m.set(i,40);break
            case 'XC': m.set(i,90);break
            case 'CD': m.set(i,400);break
            case 'CM': m.set(i,900);break
        }
    }
    m.forEach( v =>{
        sum += v
    })
    return sum
};

let s = 'XLIX'
romanToInt(s)
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
