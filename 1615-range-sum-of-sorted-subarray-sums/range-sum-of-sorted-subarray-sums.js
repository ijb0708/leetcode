/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    
    const sumList = [];

    for(let i=0; i<=n; i++) {
        let sum = 0;
        for(let j=i; j<n; j++) {
            sum += nums[j];
            sumList.push(sum);
        }
    }

    sumList.sort(function(a, b) {
        return a - b;
    });

    // console.log(sumList);

    let answer = 0;
    for(let i=left-1; i<=right-1; i++) {
        answer += sumList[i] % (1e9+7);
    }
    return answer % (1e9+7);
};