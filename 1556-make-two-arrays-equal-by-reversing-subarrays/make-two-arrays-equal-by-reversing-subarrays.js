/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    
    target.sort(function(a, b) {
        return a - b;
    });

    arr.sort(function(a, b) {
        return a - b;
    });

    for(let i=0; i<target.length; i++) {
        if(target[i] != arr[i])
            return false;            
    }
    return true;
};