/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    // const numCounts = {};
    // for(const num of nums) {
    //     if(!numCounts[num])
    //         numCounts[num] = 0;
    //     numCounts[num]++;
    // }
    // let maxElement = nums[0];
    // for(const key of Object.keys(numCounts)) {
    //     // console.log(key);
    //     if(numCounts[key] > numCounts[maxElement]) {
    //         maxElement = key;
    //     }
    // }
    // if(numCounts[maxElement] < k)
    //     return 0;

    let maxElement = nums[0];
    for(const num of nums) {
        maxElement = Math.max(maxElement, num);
    }
    console.log(maxElement);
    let answer = 0;
    let maxElementCount = 0;
    let left = 0
    for(let right=0; right<nums.length; right++) {
        // console.log(nums[right], " : ", maxElement);
        if(nums[right] == maxElement) maxElementCount++;
        // left = 0;
        while(maxElementCount == k) {
            // console.log("left : ", left, "right : ", right);
            if(nums[left] == maxElement) maxElementCount--;
            // answer++;
            // answer += (nums.length - right);
            left++;
        }
        answer += left;
    }
    
    return answer;

};