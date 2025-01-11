/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    
    if(s.length < k)
        return false;
    if(s.length == k)
        return true;

    const freqs = {};

    for(const ch of s) {
        if(freqs[ch]) {
            freqs[ch]++;
        }else {
            freqs[ch] = 1;
        }
    }

    let odd = 0;
    // console.log(freqs);
    for(const freq of Object.values(freqs)) {
        if(freq % 2 == 1) odd++;
    }

    // console.log(odd);

    if(odd <= k)
        return true;

    return false;
};