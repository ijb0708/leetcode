/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prefix = Array(nums.length);
    let suffix = Array(nums.length);

    const n = nums.length;
    prefix[0] = 1;
    suffix[n-1] = 1;

    for(let i=1; i<n; i++) {
        prefix[i] = prefix[i-1] * nums[i-1];
    }
    // console.log(prefix);

    for(let i=n-2; i>=0; i--) {
        console.log(nums[i]);
        suffix[i] = suffix[i+1] * nums[i+1];
    }
    // console.log(suffix);

    const answer = [];
    for(let i=0; i<nums.length; i++) {
        answer.push(prefix[i] * suffix[i]);
    }
    
    return answer;
};

