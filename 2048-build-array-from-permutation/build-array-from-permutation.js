/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    
    const answer = Array(nums.length);
    for(let i=0; i<nums.length; i++) {
        answer[i] = nums[nums[i]];
    }
    // console.log(ansewr);
    return answer;
};