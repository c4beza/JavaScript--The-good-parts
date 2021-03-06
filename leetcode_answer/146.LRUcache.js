/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
     this.m = new Map()
     this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.m.has(key)){
        let temp = this.m.get(key)
        this.m.delete(key)
        this.m.set(key,temp)
        return temp
    }else{
        return -1
    }

};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.m.has(key)){
        this.m.delete(key)
        this.m.set(key,value)
    }
    if(this.m.size > this.capacity){
        this.m.delete(this.m.keys().next().value)
    }


};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */