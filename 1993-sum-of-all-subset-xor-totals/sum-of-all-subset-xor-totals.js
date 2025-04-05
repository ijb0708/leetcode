/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {

    let answer = 0;
    function dfs(idx, result) {

        if(idx > nums.length) {
            // console.log(result)
            answer += result;
            return;
        }

        dfs(idx+1, result);
        dfs(idx+1, result ^ nums[idx]);

    }

    // console.log(5^6)
    dfs(0, 0);
    // console.log(answer);
    return answer / 2;
};