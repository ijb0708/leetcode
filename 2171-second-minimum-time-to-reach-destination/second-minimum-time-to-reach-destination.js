/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} time
 * @param {number} change
 * @return {number}
 */
var secondMinimum = function(n, edges, time, change) {
    
    // const graph = Array.from(new Array(n+1), () => new Array(n+1).fill(false));
    const graph = Array.from(new Array(n+1), () => new Array());
    for(const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    const que = [];
    que.push([1, 1])
    const dist1 = new Array(n+1).fill(-1);
    const dist2 = new Array(n+1).fill(-1);

    dist1[1] = 0;

    while(que.length > 0) {

        const [x, freq] = que.shift();
        let t = freq == 1 ? dist1[x] : dist2[x];

        if(parseInt(t/change) % 2 == 1) 
            t = change * (parseInt(t/change) + 1) + time;
        else
            t += time;

        // for(let i=1; i<=n; i++) {
            // if(graph[x][i]) {
        for(const y of graph[x]) {
            // console.log("u : ", x, ", v : ", i, ", time : ", t, ", freq : ", freq);
            if(dist1[y] == -1) {
                dist1[y] = t;
                que.push([y, 1]);
            }else if(dist2[y] == -1 && dist1[y] != t) {
                if(y==n)
                    return t;
                
                dist2[y] = t;
                que.push([y, 2]);
            }
        }
            // }
        // }
    }

    return 0;
};