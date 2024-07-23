/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    
    const arr = new Array();
    const map = new Map();
    for(const num of nums) {
        if(!map.has(num)) {
            map.set(num, 0);
            arr.push(num);
        }
        map.set(num, map.get(num) + 1);
    }

    return nums.sort(function (a, b) {
        const result =  map.get(a) - map.get(b);
        if(result == 0) return b - a;
        return result;
    })
};