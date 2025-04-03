/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    
    const leftMax = Array.from({length:nums.length}, ()=>0);
    const rightMax = Array.from({length:nums.length}, ()=>0);
    for(let i = 1; i < nums.length; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], nums[i - 1]);
    }
    for(let i = nums.length - 2; i > 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], nums[i + 1]);
    }

    // console.log(leftMax);
    // console.log(rightMax);

    let answer = 0;
    for(let i = 0; i < nums.length; i++) {
        // console.log("(" + leftMax[i] + " - " + nums[i] + ")" + rightMax[i] + " = ")
        // console.log((leftMax[i] - nums[i]) * rightMax[i]);
        answer = Math.max((leftMax[i] - nums[i]) * rightMax[i], answer);
    }

    return answer;
};