/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    let sum = 0;
    while(n >= 10) {
        
        sum = 0;
        while(n > 0) {
            sum += Math.pow(n % 10, 2);
            n = Math.floor(n / 10);
        }
        n = sum;
    }

    if(n == 1 || n == 7) return true;
    else return false;
};