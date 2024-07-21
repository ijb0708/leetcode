/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */
var buildMatrix = function(k, rowConditions, colConditions) {
    
    // this code copy but im under stand..
    // first, edges make to dag graph by dfs.
    // find graph such as [3, 2, 1] by postorder traversa
    // build the matrix by graph's index, values.

    function edgeSorting(edges) {
        const graph = new Map();
        for(const [src, dst] of edges) {
            if(!graph.has(src)) graph.set(src, []);
            graph.get(src).push(dst);
        }

        const visited = new Set();
        const currentPath = new Set();
        const result = [];
        function dfs(src, graph) {
            if(currentPath.has(src))
                return false;
            if(visited.has(src))
                return true;
            
            currentPath.add(src);
            visited.add(src);

            for(const dst of (graph.get(src)||[])) {
                if(!dfs(dst, graph))
                    return false;
            }

            currentPath.delete(src)
            result.push(src);

            return true;
        }

        for(let i=1; i<=k; i++) {
            if(!dfs(i, graph))
                return [];
        }

        return result.reverse();
    }

    const rowSorting = edgeSorting(rowConditions);
    const colSorting = edgeSorting(colConditions);
    if(rowSorting.length == 0) return [];
    if(colSorting.length == 0) return [];

    const positionValues = {}
    for(let i=1; i<=k; i++) 
        positionValues[i] = {'row':0, 'col':0}

    for(let i=0; i<rowSorting.length; i++) 
        positionValues[rowSorting[i]].row = i;

    for(let i=0; i<colSorting.length; i++) 
        positionValues[colSorting[i]].col = i;

    // console.log(rowSorting);
    // console.log(colSorting);

    const answer = Array.from(Array(k), () => Array(k).fill(0))
    for(let i=1; i<=k; i++) {
        const row = positionValues[i].row;
        const col = positionValues[i].col;
        answer[row][col] = i;
    }
    // console.log(positionValues)
    // console.log(answer);
    return answer;
};