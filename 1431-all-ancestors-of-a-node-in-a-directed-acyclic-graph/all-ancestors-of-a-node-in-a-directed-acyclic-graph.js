
let trunks = Array.from(Array(1000 + 1), () => Array(1000 + 1).fill(false));;
let isVisit = Array(1000 + 1).fill(false);
let parNodes;
let answer;

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
const getAncestors = function(n, edges) {

    answer = [];

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            trunks[i][j] = false;
        }
    }

    for(edge of edges) {
        trunks[edge[1]][edge[0]] = true; //reverse
    }

    for(let i=0; i<n; i++) {
        
        parNodes = [];
        for(let j=0; j<n; j++) {
            isVisit[j] = false;
        }

        dfs(i, n);
        
        parNodes.sort(function (a, b) {
            return a - b;
        });

        answer.push(parNodes)
    }

    return answer;
};

/** *
 * @param {number} nowNode
 * @param {number[]} parNodes
 * @return void
 */
function dfs(nowNode, n) {
    
    for(let i=0; i<n; i++) {
        if(trunks[nowNode][i]) {
                if(!isVisit[i]) { // no visit
                    isVisit[i] = true;
                    parNodes.push(i);
                    dfs(i, n);
                }
        }
    }
}