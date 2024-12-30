/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
    
    const cache = Array.from({length:high+1}, () => 0);
    cache[0] = 1;
    const MOD = 1000000007;
    for(let end = 1; end <= high; end++) {
        if(end >= zero) {
            cache[end] += cache[end - zero];
        }
        if(end >= one) {
            cache[end] += cache[end - one];
        }
        cache[end] %= MOD;
    }
    // console.log(cache);
    let answer = 0;
    for(let i = low; i <= high; i++) {
        answer += cache[i];
        answer %= MOD;
    }
    // console.log(answer);
    return answer;
};