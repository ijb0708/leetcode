/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function(n, edges) {
    
    const graph = [];
    const componentFreq = {};

    for(let i = 0; i < n; i++) {
        const temp = [ i ];
        graph.push(temp);
    }

    for(const [edgeA, edgeB] of edges) {
        graph[edgeA].push(edgeB)
        graph[edgeB].push(edgeA)
        // console.log(edge1, " ", edge2);
    }

    for(let i = 0; i < n; i++) {
        graph[i].sort();
        const key = graph[i].join(',');

        if(!componentFreq[key])
            componentFreq[key] = 0;
        componentFreq[key]++
    }

    // console.log(componentFreq);

    let result = 0;
    for(const [key, value] of Object.entries(componentFreq)) {
        if(key.split(',').length == value) {
            result++;
        }
    }

    // console.log(graph);
    return result;
};