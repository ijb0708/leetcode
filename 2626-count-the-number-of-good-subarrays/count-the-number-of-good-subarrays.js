/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function(nums, k) {
    let same = 0;
    let right = -1;
    const cntMap = {};
    let answer = 0;
    for(let left=0; left<nums.length; left++) {
        while(same < k && right + 1 < nums.length) {
            right++;
            if(!cntMap[nums[right]])
                cntMap[nums[right]] = 0;
            same += cntMap[nums[right]];
            cntMap[nums[right]]++;
            // console.log(right, " ", same, " ", cntMap);
        }
        if(same >= k) {
            // console.log("finish : ", nums.length - right);
            answer += nums.length - right;
        }
        cntMap[nums[left]]--;
        same -= cntMap[nums[left]];
    }
    return answer;
};

