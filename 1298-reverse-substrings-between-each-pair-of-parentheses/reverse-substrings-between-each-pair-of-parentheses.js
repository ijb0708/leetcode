/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    
    const stack = [];
    for(let i=0; i<s.length; i++) {
        // console.log(stack);
        if(s[i] == ')') {
            let rev = "";
            while(stack[stack.length-1] != '(') {
                rev += stack[stack.length-1];
                stack.pop();
            }
            stack.pop()
            stack.push(...rev.split(""));
            continue;
        }
        stack.push(s[i]);
    }

    console.log(stack.join(""));
    return stack.join("");
};
