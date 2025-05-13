/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function(s, t) {
    const MOD = 1e9 + 7;
    let freqs = Array(26).fill(0);
    for(const ch of s) {
        freqs[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    let zIndex = 25;
    for(let i=0; i<t; i++) {
        // let next = Array(26).fill(0);
        const next = (zIndex + 1) % 26;
        freqs[next] = (freqs[next] + freqs[zIndex]) % MOD;
        zIndex = ((zIndex - 1) + 26) % 26;
    }

    let answer = 0;
    for(const freq of freqs) {
        answer = (freq + answer) % MOD
    }

    return answer;
};