/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function(rowSum, colSum) {

    const answer = [];
    for(let i=0; i<rowSum.length; i++) {
        const temp = [];
        for(let j=0; j<colSum.length; j++) {
            const minValue = Math.min(colSum[j], rowSum[i]);
            colSum[j] -= minValue;
            rowSum[i] -= minValue;
            temp.push(minValue);
        }
        answer.push(temp)
    }
    return answer;
};