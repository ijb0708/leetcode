/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {

    const res = [];
    for(idx in arr) {
        res.push(fn(arr[idx], parseInt(idx)));
    }

    return res;
};