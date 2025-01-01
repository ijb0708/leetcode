/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    
    const zeros = Array.from({length:s.length}, ()=>0);
    const ones = Array.from({length:s.length}, ()=>0);

    if(s[0] == '0')
        zeros[0] = 1;
    for(let i = 1; i < s.length; i++) {
        zeros[i] = zeros[i - 1];
        if(s[i] == '0') {
            zeros[i]++
        }
    }

    if(s[s.length - 1] == '1')
        ones[s.length - 1] = 1;
    for(let i = s.length - 2; i >= 0; i--) {
        ones[i] = ones[i + 1];
        if(s[i] == '1') {
            ones[i]++
        }
    }

    // console.log(zeros);
    // console.log(ones);

    let answer = 0;
    for(let i = 0; i < s.length-1; i++) {
        answer = Math.max(zeros[i] + ones[i + 1], answer);
    }

    // console.log(answer);

    return answer;
};