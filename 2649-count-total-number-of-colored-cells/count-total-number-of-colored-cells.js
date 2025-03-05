/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function(n) {
    let answer = 1;
    for(let i=0; i<n; i++) {
        answer += 4 * i;
    }
    return answer;
    // console.log(answer);
};

// 1                    = 1
// 1+(4*1)              = 5
// 1+(4*1)+(4*2)        = 13
// 1+(4*1)+(4*2)+(4*3)  = 25