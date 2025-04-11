/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    
    function isSymmentric(num) {
        const numStrLen = Math.floor(num.toString().length);
        if(numStrLen % 2 != 0)
            return false;

        // const numStr = num.toString();
        let sum = 0;
        for(let i=0; i<numStrLen; i++) {
            if(i < numStrLen / 2)
                sum += num % 10;
            else 
                sum -= num % 10;
            num = Math.floor(num / 10);
        }
        if(sum == 0)
            return true;
        
        return false;
    }

    let answer = 0;
    for(let i=low; i<=high; i++) {
        if(isSymmentric(i))
            answer++;
    }

    return answer;
};