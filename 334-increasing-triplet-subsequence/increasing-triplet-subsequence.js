/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Number.MAX_SAFE_INTEGER;
    let second = Number.MAX_SAFE_INTEGER;
    for(let i=0; i<nums.length; i++) {
        if(nums[i] <= first) {
            first = nums[i];
        }
        if(first < nums[i] && nums[i] <= second) {
            second = nums[i];
        }
        if(second < nums[i]) {
            return true;
        }
    }

    return false;
};