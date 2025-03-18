/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
    
    let usedBits = 0;
    let answer = 0;
    let winStart = 0
    let winEnd;

    for(winEnd = 0; winEnd<nums.length; winEnd++) {
        
        let maxLen = 0;
        // console.log(usedBit & nums[i], " : ", usedBit, " ", nums[i+1]);
        while((usedBits & nums[winEnd]) != 0) {
            usedBits = usedBits ^ nums[winStart];
            winStart++;
        }

        usedBits = usedBits | nums[winEnd]

        answer = Math.max(answer, winEnd - winStart + 1);
    }
    // console.log(answer);
    return answer;
};