/**
 * @param {number[]} nums
 */
 var Solution = function(nums) {
    this.nums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums
};  

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let nums = this.nums.slice()
    let size = nums.length;
    let temp = new Array(size)
    for(let i = 0; i< size; i++){
        let index = Math.floor(Math.random() * (size-i))
        temp[i] = nums[index]
        nums[index] = nums[size-1-i]
        nums[size-1-i] = temp[i]
    }
    return temp
};
let nums = [1,2,3,4,5,6]
var obj = new Solution(nums)
var param_1 = obj.reset()
var param_2 = obj.shuffle()
