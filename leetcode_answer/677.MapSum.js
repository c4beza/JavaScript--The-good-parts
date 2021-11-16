var MapSum = function() {
    this.m = new Map()
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    this.m.set(key,val)

};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let res = 0;
    for(let s of this.m.keys()){
        if(s.startsWith(prefix)){
            res += this.m.get(s)
        }
    }
    return res
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */