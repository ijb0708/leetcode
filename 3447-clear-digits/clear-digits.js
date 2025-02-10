/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    
    const stack = [];

    for(const c of s) {
        if(isNaN(c)) {
            stack.push(c);
        }else {
            stack.pop();
        }
    }

    return stack.join('');
    // console.log(stack);
};