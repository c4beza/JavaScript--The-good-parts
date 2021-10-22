
let a1 = 'aaabbbcccabbbffbbb';
let b1 = 'ab';
let c1 = 'abc';
 
function find(a,b,c){
    let flag = true;
    if (c.indexOf(b) != -1)
    {
        flag = false;
        return 'c中有b时无法替换';
    }
	while(flag){//直到a中没有b
		let num = a.indexOf(b);//确定a中b的开始下标
		// console.log(num)
		if(num != -1){//查找到
			let arr_A = a.split('');//转换成数组
			a = '';
			let count = 0;
			arr_A.map((item,index)=>{
				console.log(item,index);
				if(index>=num && index<num+b.length){
					if(count == 0){
						a += c;
					}
					count ++;
                    console.log(count);
				}else{
					a += arr_A[index];
				}
			})
		}else{
            flag = false;
			return a;
		}
	}
}

console.log(find(a1,b1,c1));


