/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    
    const cacheA = Array(s.length).fill(0);
    const cacheB = Array(s.length).fill(0);

    cacheA[0] = s[0] == 'a' ? 1 : 0;
    cacheB[0] = s[0] == 'b' ? 1 : 0;
    for(let i=1; i<s.length; i++) {
        if(s[i] == 'a') cacheA[i] = cacheA[i-1] + 1;
        else cacheA[i] = cacheA[i-1];

        if(s[i] == 'b') cacheB[i] = cacheB[i-1] + 1;
        else cacheB[i] = cacheB[i-1];
    }

    let answer = 100001;
    
    answer = Math.min(answer, cacheA[s.length-1])
    for(let i=1; i<s.length; i++) {
        if(s[i-1] != s[i]) {
            answer = Math.min(answer, cacheB[i-1] + cacheA[s.length-1] - cacheA[i])
        }
    }
    answer = Math.min(answer, cacheB[s.length-1])

    return answer >= 100001 ? 0 : answer;
};
