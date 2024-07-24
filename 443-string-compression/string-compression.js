/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let i=0;
    let answer = 0;
    while(i < chars.length) {
        let groupSize = 1;
        while(i + groupSize < chars.length && chars[i] == chars[i + groupSize]) {
            groupSize++;
        }
        const str = String(groupSize);
        chars[answer++] = chars[i];
        if(groupSize > 1) {
            for(let j=0; j<str.length; j++) {
                chars[answer++] = str[j];
            }
        }
        i += groupSize;
        // chars.splice(i + 1, replSize);
    }
    // console.log()
    return answer;
};