/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const answer = Array.from({length:boxes.length},()=>0);
    for(let currBox=0; currBox<boxes.length; currBox++) {
        if(boxes[currBox] == '1') {
            for(let newPosition=0; newPosition<boxes.length; newPosition++) {
                answer[newPosition] += Math.abs(newPosition - currBox);
            }
        }
    }
    return answer;
};