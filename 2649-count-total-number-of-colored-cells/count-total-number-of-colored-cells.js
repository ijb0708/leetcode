/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function(n) {
    if(n==1) return 1;
    return 2*n*(n-1)+1;
};

// 1                    = 1
// 1+(4*1)              = 5
// 1+(4*1)+(4*2)        = 13
// 1+(4*1)+(4*2)+(4*3)  = 25
