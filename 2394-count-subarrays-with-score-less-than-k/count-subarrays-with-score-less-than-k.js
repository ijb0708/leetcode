/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let answer = 0, total = 0;
    let left = 0, right = 0;
    while(right < nums.length) {
        total += nums[right];
        while(left <= right && total * (right - left +1) >= k) {
            total -= nums[left];
            left++;
        }
        answer += right - left + 1;
        // console.log(" left : ", left, "right : ", right);
        right++;
    }
    return answer;
};