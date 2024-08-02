/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    
    let answer = Number.MAX_SAFE_INTEGER;

    let totalOneCount = 0;
    for(const num of nums) {
        totalOneCount += num;
    }
    // console.log(totalOneCount);

    let currOneCount = nums[0];
    let end=0;

    while(end + 1 < totalOneCount) {
        currOneCount += nums[++end % nums.length];
    }

    answer = Math.min(answer, totalOneCount - currOneCount);

    for(let start=1; start<nums.length; start++) {

        if(nums[start-1] == '1') currOneCount--;
        while(end - start + 1 < totalOneCount) {
            currOneCount += nums[++end % nums.length];
        }

        answer = Math.min(answer, totalOneCount - currOneCount);
    }

    return answer;
};