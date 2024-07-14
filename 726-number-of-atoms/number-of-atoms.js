/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function(formula) {
    
    const stack = [];
    const hashMap = {};
    for(let i=0; i<formula.length; i++) {

        if(/^[A-Z]+$/.test(formula[i])) {
            if(i+1 < formula.length && /^[a-z]+$/.test(formula[i+1])) {
                stack.push(formula[i] + formula[i+1])
                i++;
            }else {
                stack.push(formula[i])
            }

            if(i+1 < formula.length && !/^[0-9]+$/.test(formula[i+1])) {
                stack.push('1')
            }
        }

        if(/^[0-9]+$/.test(formula[i])) {
            let temp = formula[i];
            while(i+1 < formula.length && /^[0-9]+$/.test(formula[i+1])) {
                temp += formula[i+1];
                i++;
            }
            stack.push(temp);
        }

        if(formula[i] == '(') {
            stack.push('(');
        }

        if(formula[i] == ')') {
            let multiply = "";
            if(i+1 < formula.length && /^[0-9]+$/.test(formula[i+1])) {
                multiply += formula[i+1];
                i++;
                while(i+1 < formula.length && /^[0-9]+$/.test(formula[i+1])) {
                    multiply += formula[i+1];
                    i++;
                }
            }

            let multiplyNum = 1;
            if(multiply != "") {
                multiplyNum = parseInt(multiply)
            }

            let j = stack.length - 1;
            while(true) {
                if (/^[0-9]+$/.test(stack[j])) {
                    stack[j] = parseInt(stack[j]) * multiplyNum + "";
                }
                if (stack[j] === "(") {
                    stack[j] = "";
                    break;
                }
                j--;
            }
        }
    }

    for(let i=0; i<stack.length; i++) {
        if(stack[i] == "") {
            continue;
        }

        if(/^[a-zA-Z]+$/.test(stack[i])) {
            const symbol = stack[i];
            const count = stack[i+1] ? parseInt(stack[i+1]) : 1;
            if(hashMap[symbol]) {
                hashMap[symbol] += count;
            }else {
                hashMap[symbol] = count;
            }
        }
    }

    let answer = "";
    for(key of Object.keys(hashMap).sort()) {
        const count = hashMap[key] == 1 ? "" : hashMap[key] + "";
        answer += key + count;
    }

    // console.log(hashMap);
    return answer;
};