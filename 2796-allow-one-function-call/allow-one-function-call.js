/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    
    let isCalled = false;
    return function(...args){

        // 부르지 않았을 경우
        if(!isCalled) {

            isCalled = true;
            return fn(...args);
        }
        return undefined;
        
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
