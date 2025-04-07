/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    
    let total = 0;
    for(const num of nums) {
        total += num;
    }
    if(total % 2 != 0)
        return false;
    
    const cache = Array.from({length:total / 2 + 1}, ()=>false);

    // console.log(cache)

    cache[0] = true;
    for(const num of nums) {
        for(let i = total / 2; i >= num; i--) {
            cache[i] = cache[i] || cache[i - num];
        }
    }
    return cache[total / 2];
};
