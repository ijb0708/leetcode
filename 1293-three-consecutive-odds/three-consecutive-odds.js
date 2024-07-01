/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    
    let count = 2;
    for(val of arr) {
        if(val % 2 == 1) {
            if(count == 0) {
                return true;
            }else {
                count--;
            }
        }else {
            count = 2;
        }
    }
    return false;
};
