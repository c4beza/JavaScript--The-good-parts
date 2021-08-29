var reverse = function(x) {
    let res = 0;
    while(x!=0){
        let n = x % 10;
        let newRes = res * 10 + n;
        if(newRes > Math.pow(2,31) || newRes < Math.pow(-2,31)){
            return 0
        }
        res = newRes;
        x = ~~(x/10); 
    }
   return res;
};

reverse(-123)