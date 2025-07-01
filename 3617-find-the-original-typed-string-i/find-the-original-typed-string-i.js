/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    let answer = 1;
    for(let i=1; i<word.length; i++) {
        if(word[i-1] == word[i]) {
            answer++;
        }
    }
    return answer;
};