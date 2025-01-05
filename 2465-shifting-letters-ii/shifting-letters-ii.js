/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */

const az = 'abcdefghijklmnopqrstuvwxyz';

var shiftingLetters = function(s, shifts) {
    
    const diff = new Array(s.length + 1).fill(0);
    for(const [s, e, d] of shifts) {
        diff[s] += -1 + 2 * d; // forward
        diff[e+1] -= -1 + 2 * d; // backward
    }
    console.log(diff);
    
    for(let i=1; i<diff.length; i++) {
        diff[i] += diff[i-1]; 
    }

    console.log(diff);

    return [...s].map((c, i)=> {
        return az.at((c.charCodeAt() - 97 + diff[i]) % 26)
    }).join('');
};