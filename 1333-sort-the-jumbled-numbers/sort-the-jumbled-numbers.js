/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
    const mappedArray = {};
    for(const num of nums) {
        let temp = "";
        // console.log(num);
        for(const ch of (num+"")) {
            // console.log(ch);
            temp += mapping[parseInt(ch)];
        }
        mappedArray[num] = parseInt(temp);
    }
    // console.log(mappedArray);
    return nums.sort(function(a, b) {
        const ma = mappedArray[a];
        const mb = mappedArray[b];
        if(mappedArray[a] == mappedArray[b]) {
            return 0;
        }
        return ma - mb;
    })

};