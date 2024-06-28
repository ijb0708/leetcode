/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function(n, roads) {
    
    const roadCount = new Array(n).fill(0);

    for(road of roads) {
        roadCount[road[0]]++;
        roadCount[road[1]]++;
    }

    citys = []
    for(let i = 0; i < n; i++) {
        citys.push(i);
    }

    citys.sort(function(a, b) {
        return roadCount[a] - roadCount[b]
    })
    
    const assignCity = [];
    let idx = 1;
    for(city of citys) {
        assignCity[city] = idx;
        idx++;
    }

    let answer = 0;
    for(road of roads) {
        answer += assignCity[road[0]] + assignCity[road[1]];
    }
    
    return answer
};