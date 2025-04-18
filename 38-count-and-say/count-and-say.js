/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    
    function rle(num) {
        let result = "";
        const numStr = num.toString();
        let standIdx = 0;
        let i = 0;
        while(i<numStr.length) {
            let cnt = 0;
            standIdx = i;
            // console.log(numStr[standIdx]," == ", numStr[i]);
            while(numStr[standIdx] == numStr[i] && i<numStr.length) {
                cnt++;
                i++;
            }
            result += cnt.toString();
            result += numStr[standIdx];
            // console.log(result);
            // console.log("-----");
        }

        return result;
    }

    // rle(1)
    let answer = "1";
    n--;
    while(n--) {
        answer = rle(answer);
    }
    // console.log(answer);
    // console.log(rle(1211));

    return answer;
};