/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort(function(a, b) {
        return a - b;
    });
    // console.log(nums);

    let answer = 0;
    let left = 0, right = nums.length-1;
    while(left < right) {
        const sum = nums[left] + nums[right];
        if(sum > k) {
            right--;
        }else if(sum == k) {
            right--;
            left++;
            answer++;
        }else {
            left++;
        }
    }
    // console.log(answer);
    return answer;
};