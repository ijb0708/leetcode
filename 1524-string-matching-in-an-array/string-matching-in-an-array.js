/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    
    const answer = [];
    for(let i=0; i<words.length; i++) {
        for(let j=0; j<words.length; j++) {
            if(i !== j && words[j].indexOf(words[i]) != -1) {
                answer.push(words[i]);
                break;
            }
        }
    }
    return answer;
};