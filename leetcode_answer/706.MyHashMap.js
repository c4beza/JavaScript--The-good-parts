var MyHashMap = function() {
    this.arr = []
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    for(let i = 0;i<this.arr.length;i++){
        if(this.arr[i][0] == key){
            this.arr[i][1] = value
            return 
        }
    }
    this.arr.push([key,value])
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    for(let i = 0;i<this.arr.length;i++){
        if(this.arr[i][0] == key){
            return this.arr[i][1] 
        }
    }
    return -1
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    for(let i = 0;i<this.arr.length;i++){
        if(this.arr[i][0] == key){
            this.arr.splice(i,1)
            return 
        }
    }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */