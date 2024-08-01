/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let answer = 0;
    for(detail of details) {
        // console.log(parseInt(detail.substring(11, 13)));
        if(60 < parseInt(detail.substring(11, 13))) {
            answer++;
        }
    }

    return answer;
};