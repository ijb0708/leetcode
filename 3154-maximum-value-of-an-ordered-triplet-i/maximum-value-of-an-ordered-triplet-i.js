/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    
    let answer = 0;
    for(let k = 2; k < nums.length; k++) {
        let maxPrefix = nums[0];
        for(let j = 1; j < k; j++) {
            answer = Math.max(answer, (maxPrefix - nums[j]) * nums[k]);
            maxPrefix = Math.max(maxPrefix, nums[j]);
        }
    }

    return answer;
};