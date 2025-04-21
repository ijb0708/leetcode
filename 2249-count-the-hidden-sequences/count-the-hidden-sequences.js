/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function(differences, lower, upper) {
    let cur = 0, curMin = 0, curMax = 0;
    for(const diff of differences) {
        cur += diff;
        curMin = Math.min(curMin, cur);
        curMax = Math.max(curMax, cur);
        if(curMax - curMin > upper - lower)
            return 0;
    }
    return (upper - lower) - (curMax - curMin) + 1;
};