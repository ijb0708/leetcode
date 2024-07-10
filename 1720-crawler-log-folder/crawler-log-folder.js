/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {

    let answer = 0;
    for(log of logs) {
        if(log == "../") {
            if(answer == 0) continue;
            answer--; continue;
        }
        if(log != "./") {
            answer++;
        }
    }
    return answer;
};