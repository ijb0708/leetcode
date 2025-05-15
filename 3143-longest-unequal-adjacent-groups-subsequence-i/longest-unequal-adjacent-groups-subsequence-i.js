/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    
    const answer = [ words[0] ];
    let nowGroup = groups[0];
    for(let i=1; i<groups.length; i++) {
            // console.log(nowGroup, " - ", groups[i])
        if(nowGroup != groups[i]) {
            answer.push(words[i]);
            nowGroup = groups[i];
        }
    }

    // console.log(answer);
    return answer;
};