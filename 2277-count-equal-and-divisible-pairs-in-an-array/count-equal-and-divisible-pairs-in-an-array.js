/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    
    let answer = 0;
    for(let i=0; i<nums.length; i++) {
        for(let j=0; j<i; j++) {
            // console.log(i," ", j);
            // console.log(" - ", nums[i]," ", nums[j]);
            if(nums[i] == nums[j]
                &&(i * j) % k == 0) {
                answer++;
            }
        }
    }

    return answer;
};