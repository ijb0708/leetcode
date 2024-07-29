/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    
    function dfs(idx, val, count, cache) {
        if(idx == rating.length) 
            return 0;
        
        if(count == 2) {
            return 1;
        }
        
        if(cache[idx][count] != -1) {
            return cache[idx][count];
        }

        let localCount = 0;
        for(let i=idx+1; i<rating.length; i++) {
            if(rating[idx] < rating[i]) {
                localCount += dfs(i, rating[idx], count+1, cache);
            }
        }

        return cache[idx][count] = localCount;
    }

    const cache1 = Array.from(new Array(rating.length), () => new Array(3).fill(-1));
    const cache2 = Array.from(new Array(rating.length), () => new Array(3).fill(-1));

    let answer = 0;
    for(let i=0; i<rating.length; i++) {
       answer += dfs(i, 0, 0, cache1); 
    }
    rating = rating.reverse();
    for(let i=0; i<rating.length; i++) {
       answer += dfs(i, 0, 0, cache2); 
    }

    // console.log(answer);
    return answer;
};