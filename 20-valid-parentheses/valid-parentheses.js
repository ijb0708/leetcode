/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    const stack = [];
    for(let i = 0; i < s.length; i++) {
        console.log(i)
        console.log(s[i])
        if(s[i] == "(" || s[i] == "[" || s[i] == "{") {
            stack.push(s[i]);
        console.log(stack)
        }
        if(s[i] == ")") {
            if(stack.length > 0 && stack[stack.length-1] == "(") stack.pop();
            else return false;
        }
        if(s[i] == "]") {
            if(stack.length > 0 && stack[stack.length-1] == "[") stack.pop();
            else return false;
        }
        if(s[i] == "}") {
            if(stack.length > 0 && stack[stack.length-1] == "{") stack.pop();
            else return false;
        }
    }

    if(stack.length == 0) return true;
    else return false;
};