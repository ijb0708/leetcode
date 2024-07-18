/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    
    let answer = "";
    let idx = 0;
    while(idx < word1.length && idx < word2.length) {
        answer += word1[idx];
        answer += word2[idx];
        idx++;
    }

    if(word1.length < word2.length) {
        answer += word2.substring(idx)
    }else {
        answer += word1.substring(idx)
    }
    return answer;
};