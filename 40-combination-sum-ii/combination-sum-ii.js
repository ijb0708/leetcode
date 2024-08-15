/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const answer = [];
    candidates.sort(function(a, b) {
        return a - b;
    });

    function dfs(idx, arr, localTarget) {
        // console.log(arr, localTarget);/
        if(localTarget == 0) {
            answer.push([...arr])
        }
        for(let i=idx; i<candidates.length; i++) {
            if(i > idx && candidates[i] == candidates[i-1]) continue;
            if(candidates[i] > localTarget) break;

            arr.push(candidates[i]);
            dfs(i+1, arr, localTarget - candidates[i]);
            arr.pop();
        }

    }
    dfs(0, [], target);
    console.log(answer);
    return answer;
};