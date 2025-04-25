/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function(nums, modulo, k) {
    // const prefixCountCache = Array(modulo).fill(0);
    // prefixCountCache[0] = 1;
    const prefixCountMap = new Map();
    prefixCountMap.set(0, 1);
    let answer = 0;
    let prefix = 0;
    for(let i=0; i<nums.length; i++) {
        if(nums[i] % modulo == k) {
            prefix++;
        }
        // answer += prefixCountCache[(prefix - k + modulo) % modulo];
        // prefixCountCache[prefix % modulo]++;

        answer += prefixCountMap.get((prefix - k + modulo) % modulo)||0;
        prefixCountMap.set(prefix % modulo, (prefixCountMap.get(prefix % modulo)||0) + 1);
    }
    // console.log(prefixCountCache);
    return answer;
};