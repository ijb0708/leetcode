/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
    const nums1Len = nums1.length, nums2Len = nums2.length;

    const answer = [];
    for(let i=0; i<nums1.length; i++) {
        for(let j=0; j<nums2.length; j++) {
            const front = nums2.shift();
            if(nums1[i] == front) {
                answer.push(front);
                break;
            }
            nums2.push(front);
        }
    }
    
    return answer;
};