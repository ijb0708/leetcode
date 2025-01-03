/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    const prefix = Array.from({length : nums.length}, ()=>0);
    prefix[0] = nums[0];
    for(let i=1; i<nums.length; i++) {
        prefix[i] = prefix[i-1] + nums[i];
    }
    // console.log(prefix);
    const maxSum = prefix[nums.length-1];
    let answer = 0;
    for(let i=0; i<nums.length - 1; i++) {
        // console.log(prefix[i], " : ", maxSum - prefix[i]);
        if(prefix[i] >= maxSum - prefix[i])
            answer++;
    }
    // console.log(answer);
    return answer;
};