/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function(n, edges, distanceThreshold) {
    const graph = [];
    for(let i=0; i<n; i++) {
        const temp = [];
        for(let j=0; j<n; j++) {
            if(i==j) temp.push(0);
            else temp.push(Number.MAX_SAFE_INTEGER);
        }
        graph.push(temp);
    }

    for(const [from, to, weight] of edges) {
        graph[from][to] = weight;
        graph[to][from] = weight;
    }

    for(let k=0; k<n; k++) {
        for(let i=0; i<n; i++) {
            for(let j=0; j<n; j++) {
                graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j])
            }
        }
    }

    // console.log(graph)
    let answer;
    let minVal = 100;
    for(let i=0; i<n; i++) {
        let count = 0;
        for(let j=0; j<n; j++) {
            if(i!=j && graph[i][j] <= distanceThreshold) 
                count++;
        }
        // console.log(i, " ", count);
        if(count <= minVal) {
            minVal = count;
            answer = i;
            // console.log("minVal ", i, " : ", minVal);
        }
    }

    return answer;
};