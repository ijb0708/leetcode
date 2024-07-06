/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    
    let answer = 1;
    let dir = 1;

    for(let i=0; i<time; i++){

        if(answer == n || answer == 1 && dir == -1)  {
            dir *= -1;
        }
        answer += dir;

    }

    return answer;
};