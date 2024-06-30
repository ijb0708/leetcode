/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function(n, edges) {
    
    const alice = Array.from({length:n + 1}, (v,i)=>i); 
    const bob = Array.from({length:n + 1}, (v,i)=>i); 

    const find = function(a, group) {

        if(group[a] == a) // this is root
            return a;
        else {
            return group[a] = find(group[a], group); // find root
        }
    }

    const merge = function(a, b, group) {
        
        const findA = find(a, group);
        const findB = find(b, group);

        if(findA == findB) {
            return false;
        }

        group[findB] = findA;
        return true; // merge 
    }


    edges.sort(function(a, b) {
        return b[0] - a[0];
    });

    let reqireEdgeCount = 0;
    for(edge of edges) {
        if(edge[0] == 1) {
            if(merge(edge[1], edge[2], alice)) { // is merge
                reqireEdgeCount++;
            }
        }
        if(edge[0] == 2) {
            if(merge(edge[1], edge[2], bob)) { // is merge
                reqireEdgeCount++;
            }
        }
        if(edge[0] == 3) {
            const aliceMeger = merge(edge[1], edge[2], alice);
            const bobMeger = merge(edge[1], edge[2], bob);
            if(aliceMeger || bobMeger) { // is merge
                reqireEdgeCount++;
            }
        }
    }

    // let printA = ""
    // let printB = ""
    // for(let i = 1; i <= n; i++) {
    //     printA += alice[i] + " "
    //     printB += bob[i] + " "
    // }
    // console.log(printA)
    // console.log(printB)

    for (let i = 1; i <= n; i++) {
        if (find(n, alice) != find(i, alice) ||find(n, bob) != find(i, bob))
            return -1;
    }

    return edges.length - reqireEdgeCount;

};