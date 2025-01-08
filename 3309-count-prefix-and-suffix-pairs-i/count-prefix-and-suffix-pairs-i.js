/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {

    let answer = 0;

    for(let i=0; i<words.length; i++) {
        for(let j=i; j<words.length; j++) {
            if(i != j 
                && words[j].indexOf(words[i]) == 0 
                    && words[j].lastIndexOf(words[i]) == words[j].length - words[i].length) {
                // console.log(i, " : ", j);
                answer++;
            }
        }
    }
    
    return answer;
};