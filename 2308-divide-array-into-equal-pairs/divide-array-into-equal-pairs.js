/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    nums.sort();
    // console.log(nums);
    for(let i=0; i<nums.length; i+=2) {
        if(nums[i] != nums[i+1]) 
            return false;
    }
    return true;
};