/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {

    if(nums.length <= 4) { // only zero
        return 0;
    }
    
    nums.sort(function(a, b) {
        return a-b;
    });

    // console.log(nums);
    answer = 10000000000
    for(let i=0; i<=3; i++) {
        // console.log(nums[nums.length+i-4], "-", nums[i], " = ", nums[nums.length+i-4] - nums[i]);
        answer = Math.min(answer, nums[nums.length+i-4] - nums[i]);
    }

    return answer;
};