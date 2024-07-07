/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    
    let answer = numBottles;
    while(numBottles >= numExchange) {
        const exchangeBottles = Math.floor(numBottles / numExchange);
        answer += exchangeBottles;
        numBottles = exchangeBottles + (numBottles % numExchange);
    }

    return answer;
};

