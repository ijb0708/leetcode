/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    
    let answer = 0;
    let maxPos = -1, minPos = -1, invalid = -1;
    for(let i=0; i<nums.length; i++) {
        if(nums[i] < minK || nums[i] > maxK) {
            invalid = i;
        }
        if(nums[i] == minK) {
            minPos = i;
        }
        if(nums[i] == maxK) {
            maxPos = i;
        }
        const validStart = Math.min(minPos, maxPos);
        if (validStart > invalid) {
            answer += validStart - invalid;
        }
    }
    // console.log(answer);

    return answer;
};