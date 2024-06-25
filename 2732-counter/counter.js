/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    this.counter = n;
    return function() {
        
        return this.counter++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */