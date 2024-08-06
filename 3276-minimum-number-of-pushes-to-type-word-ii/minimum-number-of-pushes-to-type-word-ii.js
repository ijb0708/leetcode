/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    
    const countMap = {};
    const alphaList = [];
    for(const ch of word) {
        if(countMap[ch] == null) {
            countMap[ch] = 0;
            alphaList.push(ch);
        }
        countMap[ch]++;
    }

    // console.log(countMap);

    alphaList.sort(function(a, b) {
        return countMap[b] - countMap[a];
    });

    const pushCountMap = {};

    // console.log(alphaList);

    for(let i=0; i<alphaList.length; i++) {
        pushCountMap[alphaList[i]] = parseInt((i / 8) + 1);
    }

    // console.log(pushCountMap);

    let answer = 0;
    for(const ch of word) {
        answer += pushCountMap[ch];
    }
    
    return answer;
};