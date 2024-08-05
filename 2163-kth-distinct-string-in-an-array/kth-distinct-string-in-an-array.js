/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    
    const countMap = {};
    for(const item of arr) {
        if(countMap[item] == null) 
            countMap[item] = 0;
        countMap[item]++;
    }

    const arrFilter = arr.filter(function(item) {
        if(countMap[item] == 1)
            return true;
        return false;
    });
    
    return arrFilter.length > k-1 ? arrFilter[k-1] : "";
};