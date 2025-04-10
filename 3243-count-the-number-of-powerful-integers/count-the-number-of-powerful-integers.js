/**
 * @param {number} start
 * @param {number} finish
 * @param {number} limit
 * @param {string} s
 * @return {number}
 */
var numberOfPowerfulInt = function(start, finish, limit, s) {

    const high = finish.toString();
    const n = high.length;
    const low = start.toString().padStart(n, '0');
    const preLen = n - s.length;
    const cache = Array.from({length:n}, ()=>-1);

    function dfs(idx, limitLow, limitHigh) {
        
        // console.log(idx);
        // console.log(cache)
        if(idx == n) {
            // console.log("+");
            return 1;
        }

        if(!limitLow && !limitHigh && cache[idx] != -1) 
            return cache[idx];
        
        const lo = limitLow ? parseInt(low[idx]) : 0;
        const hi = limitHigh ? parseInt(high[idx]) : 9;
        
        let res = 0;
        if(idx < preLen) {
            for(let digit=lo; digit<=Math.min(hi, limit); digit++) {
                res += dfs(idx+1
                    , limitLow && digit === lo
                    , limitHigh && digit === hi);
            }
        }else {
            const x = parseInt(s[idx - preLen]);
            // console.log("x : " + x);
            if(lo <= x && x <= Math.min(hi, limit)) {
                res = dfs(idx + 1
                    , limitLow && x === lo
                    , limitHigh && x === hi);
            }
        }
        // console.log(res);
        if(!limitLow && !limitHigh) {
            cache[idx] = res;
        }

        return res;
    }
    // console.log(dfs(0, true, true));
    return dfs(0, true, true);
};