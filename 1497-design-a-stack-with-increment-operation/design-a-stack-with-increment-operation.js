/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    
    this.maxSize = maxSize;
    this.cache = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {

    if(this.cache.length < this.maxSize) {
        this.cache.push(x);
    }

    return;
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {

    if(this.cache.length > 0) {
        return this.cache.pop();
    }

    return -1;
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    
    for(let i=0; i<k && i<this.cache.length; i++) {
        this.cache[i] += val;
    }

    return;
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */