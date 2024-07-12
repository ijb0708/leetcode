/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
    
    const stack = [];
    let answer = 0;
    for(ch of s) {
        stack.push(ch);
        // console.log(stack);
    }

    let str;
    if(x > y) {
        let stack = [];
        str = s;
        for(ch of str) {
            if(stack[stack.length-1] == 'a' && ch == 'b') {
                answer += x;
                stack.pop();
            }else {
                stack.push(ch);
            }
        }
        str = stack.reverse().join('');
        stack = []
        for(ch of str) {
            if(stack[stack.length-1] == 'a' && ch == 'b') {
                answer += y;
                stack.pop();
            }else {
                stack.push(ch);
            }
        }
    }else {
        let stack = [];
        str = s;
        for(ch of str) {
            if(stack[stack.length-1] == 'b' && ch == 'a') {
                answer += y;
                stack.pop();
            }else {
                stack.push(ch);
            }
        }
        str = stack.reverse().join('');
        stack = []
        for(ch of str) {
            if(stack[stack.length-1] == 'b' && ch == 'a') {
                answer += x;
                stack.pop();
            }else {
                stack.push(ch);
            }
        }
    }
    // console.log(answer);
    return answer;
};
