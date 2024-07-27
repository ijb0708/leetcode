/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(source, target, original, changed, cost) {
    
    const graph = Array.from(new Array(26), () => new Array(26).fill(Number.MAX_SAFE_INTEGER));
    for(let i=0; i<26; i++) {
        for(let j=0; j<26; j++) {
            if(i == j) graph[i][j] = 0;
            else graph[i][j] = Number.MAX_SAFE_INTEGER;
        }
    }
    for(let i=0; i<original.length; i++) {
        const oriChNum = original[i].charCodeAt(0) - 97;
        const chaChNum = changed[i].charCodeAt(0) - 97;
        graph[oriChNum][chaChNum] = Math.min(graph[oriChNum][chaChNum], cost[i]); 
    }
    // console.log(graph);
    
    for(let k=0; k<26; k++) {
        for(let i=0; i<26; i++) {
            for(let j=0; j<26; j++) {
                graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
            }
        }
    }
    // console.log(graph);
    let answer = 0;
    for(let i=0; i<source.length; i++) {

        const sorChNum = source.charCodeAt(i) - 97;
        const tarChNum = target.charCodeAt(i) - 97;

        if(graph[sorChNum][tarChNum] >= Number.MAX_SAFE_INTEGER) return -1;
        else answer += graph[sorChNum][tarChNum];

        // console.log(source, " : " , target, " = ", graph[sorChNum][tarChNum]);
    }

    return answer;
};


