var MinStack = function() {
    this.arr = new Array()
    this.min = +Infinity;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(val <= this.min){
        this.arr.push(this.min)
        this.min = val
    }
    this.arr.push(val)
    return null
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.arr.pop() == this.min){
        this.min = this.arr.pop();
        console.log(this.min);
        console.log(this.arr);
    }
    return null
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let val = this.arr.slice(-1)
    console.log(val);
    return val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    console.log(this.min);
    return this.min
};

let obj = new MinStack()
obj.push(0)
obj.push(1)
obj.push(0)
console.log(obj.arr);
// obj.top()
// obj.getMin()
