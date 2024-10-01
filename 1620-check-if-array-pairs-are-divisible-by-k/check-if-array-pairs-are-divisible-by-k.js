/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
    
    const map = {};

    for(const item of arr) {
        const rem = (item % k + k) % k;

        if(map[rem] == null) 
            map[rem] = 0;

        map[rem]++;
    }

    // console.log(map);

    if(map[0] != null && map[0] % 2 != 0)
        return false;

    for(let i=1; i<k; i++) {

        // const rem = (arr[i] % k + k) % k;

        // console.log(i, " ", k-i);
        if(map[i] != map[k-i])
            return false;
    }

    return true;
};