/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    
    let maxVal = candies[0];
    for(let i=0; i<candies.length; i++) {
        maxVal = Math.max(maxVal, candies[i]);
        candies[i] += extraCandies;
    }
    const answer = [];
    for(const candy of candies) {
        if(candy >= maxVal) answer.push(true);
        else answer.push(false);
    }

    return answer;
};