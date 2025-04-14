/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {

    let leftSum = 0;
    let rightSum = 0;
    for(num of nums) {
        rightSum += num;
    }
    for(let i=0; i<nums.length; i++) {
        rightSum -= nums[i];
        if(leftSum == rightSum)
            return i;
        leftSum += nums[i];
    }
    return -1;
};