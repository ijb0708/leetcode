/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const numCnt = {};
    for(const num of nums) {
        if(!numCnt[num]) 
            numCnt[num] = 0;
        numCnt[num]++;
    }

    function numCntChk(obj) {
        for(const val of Object.values(numCnt)) {
            if(val > 1) {
                return false;
            }
        }
        return true;
    }

    if(numCntChk(numCnt)) {
        return 0;
    }
    // console.log(numCnt);
    let answer = 0;
    while(nums.length > 0) {
        answer++;
        for(let j=0;j<3 && nums.length>0; j++) {
            // const outNum = nums.shift();
            numCnt[nums.shift()]--;
        }
        // console.log("- - -");
        // console.log(nums)
        // console.log(numCnt)
        // console.log("- - -");
        if(numCntChk(numCnt)) {
            break;
        }
    }

    return answer;

};