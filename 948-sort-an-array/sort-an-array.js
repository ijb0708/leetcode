/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {

    const countingArr = new Array(2 * 50000 + 1).fill(0);
    for (let num of nums) {
        countingArr[num + 50000]++;
    }

    const answer = [];
    for(let i=0; i<countingArr.length; i++) {
        let freq = countingArr[i];
        while(freq > 0) {
            answer.push(i - 50000);
            freq--;
        }
    }
    
    return answer;
};